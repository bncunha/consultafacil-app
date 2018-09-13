import { Component, ViewChild, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalizacaoPage } from '../localizacao/localizacao';
import { Nav, Platform } from 'ionic-angular';
import { ConsultaProvider } from '../../providers/consulta/consulta.provider';
import { UserLoggedProvider } from '../../providers/user-logged/user-logged';
import { AlertProvider } from '../../core/alert/alert';
import { Consulta } from '../../models/consulta.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage  {
  @ViewChild(Nav) nav: Nav;
  @Input() btnFooter: string;

  consultas = [];
  backupConsultas = [];

  constructor(
    public platform: Platform, 
    public navCtrl: NavController,
    private consultaProvider: ConsultaProvider,
    private userLogged: UserLoggedProvider,
    private alert: AlertProvider) {

    // this.consulta = [
      
    //   // {med:'Dr. Carlos da Silva',espec:'Clinico Geral',valorCons:'80',data:'05/06/2018',hora:'14:30hrs',lat:'-20.2944175',log:'-40.3048715'},
    //   // {med:'Drª. Maria do Socorro',espec:'Pediatra',valorCons:'60',data:'16/07/2018',hora:'16:00hrs',lat:'-20.3184527',log:'-40.4246079'},
    //   // {med:'Drª. Priscila Souza',espec:'Dentista',valorCons:'80 a 200',data:'20/06/2018',hora:'10:00hrs',lat:'-20.316031',log:'-40.3976571'}
    // ];
    
  }

  ionViewDidLoad() {
    if (this.userLogged.tipo === 'p') {
      this.carregarConsultasPaciente();
    } else if (this.userLogged.tipo === 'm') {
      // this.consultaProvider.getByMeidco(this.userLogged.usuario.id)
    }
  }

  carregarConsultasPaciente() {
    this.alert.showLoading();
    this.consultaProvider.getByPaciente(this.userLogged.usuario.id).then(result => {
      console.log('Consultas', result);
      this.consultas = result.reverse();
      this.backupConsultas = this.consultas.slice();
      this.alert.hideLoading();
    }).catch(err => {
      console.log('Erro', err);
    });
  }
  
  filtrarConsultas(opcaoConsulta) {
    console.log('Filtrando...', opcaoConsulta, this.backupConsultas);
    if (opcaoConsulta === -1) {
      this.consultas = this.backupConsultas.slice();
    } else {
      this.consultas = this.backupConsultas.filter(consulta => consulta.situacao === opcaoConsulta);
      console.log(this.consultas);
    }

  }

  abrirTela(lat,log){
    console.log(lat);
    console.log(log);
    //Vai abrir a tela desejada, onde a mesma deve ser importada
    this.navCtrl.push(LocalizacaoPage,{parametro1:lat, parametro2: log});

  }

  confirmCancel(consulta) {
    this.alert.confirmAlert(this.cancelarConsulta.bind(this, consulta));
  }

  cancelarConsulta(consulta) {
    this.alert.showLoading();
    let newConsulta: Consulta = Object.assign(new Consulta(), consulta);
    newConsulta.situacao = Consulta.SITUACAO.Cancelado;
    this.consultaProvider.update(newConsulta.toApi()).then(result => {
      this.alert.hideLoading();
      consulta.situacao = Consulta.SITUACAO.Cancelado;
      console.log(result);
    }).catch(err => {
      this.alert.hideLoading();
      console.log(err);
    });
  }
}
