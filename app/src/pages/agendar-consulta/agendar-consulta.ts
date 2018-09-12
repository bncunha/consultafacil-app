import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta } from '../../models/consulta.model';
import { AlertProvider } from '../../core/alert/alert';
import { HomePage } from '../home/home';
import { UserLoggedProvider } from '../../providers/user-logged/user-logged';
import { ConsultaProvider } from '../../providers/consulta/consulta.provider';


/**
 * Generated class for the AgendarConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agendar-consulta',
  templateUrl: 'agendar-consulta.html',
})
export class AgendarConsultaPage {

  model: Consulta = new Consulta();
  etapa = 'data';
  horariosDisponiveisManha = [new Date().setHours(8, 0, 0), new Date().setHours(9, 0, 0), new Date().setHours(10, 0, 0), new Date().setHours(11, 0, 0)];
  horariosDisponiveisTarde = [new Date().setHours(13, 0, 0), new Date().setHours(14, 0, 0), new Date().setHours(15, 0, 0), new Date().setHours(16, 0, 0)];
  horariosDisponiveisNoite = [new Date().setHours(18, 0, 0), new Date().setHours(19, 0, 0)];

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private ref: ChangeDetectorRef,
    private alert: AlertProvider,
    private userLogged: UserLoggedProvider,
    private consultaService: ConsultaProvider) {
    this.model.medico = this.navParams.get("parametro");
    this.model.data = new Date((new Date()).valueOf() + 1000*3600*24); // pega o próximo dia
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendarConsultaPage', this.model);
    console.log('Usuario Logado', this.userLogged.getUsuario());
  }

  dateChange(data) {
    this.model.data = data;
  }

  markDisabled (data) {
    return data < new Date();
  }

  nextEtapa(etapaSeguinte) {
    this.etapa = etapaSeguinte;
  }

  openSelect(select) {
    select.open();
  }

  voltarEtapa() {
    if (this.etapa === 'hora') {
      this.etapa = 'data';
    } else if (this.etapa === 'confirmacao') {
      this.etapa = 'hora';
    }
    this.ref.detectChanges();
  }

  save() {
    console.log('Salvando consulta', this.model);
    this.model.paciente = this.userLogged.usuario;
    console.log(this.model.horario);
    this.alert.showLoading();
    this.consultaService.add(this.model.toApi()).then(result => {
      console.log(result);
      this.alert.hideLoading();
      this.alert.successAlert(this.inicio.bind(this));
    }).catch(err => {
      console.log('Erro', err);
      this.alert.hideLoading();
      this.alert.errorAlert(this.inicio.bind(this));
    });
  }

  inicio() {
    this.navCtrl.popToRoot();
  }

  getMonth() {
    const meses = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
    return meses[this.model.data.getMonth()] + ' de ' + this.model.data.getFullYear();
  }

}
