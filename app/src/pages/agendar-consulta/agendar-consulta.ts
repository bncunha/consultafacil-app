import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Consulta } from '../../models/consulta.model';
import { AlertProvider } from '../../core/alert/alert';
import { HomePage } from '../home/home';


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
  horariosDisponiveisManha = [new Date(), new Date(), new Date(), new Date()];
  horariosDisponiveisTarde = [new Date(), new Date(), new Date(), new Date()];
  horariosDisponiveisNoite = [new Date(), new Date(), new Date(), new Date()];

  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private ref: ChangeDetectorRef,
    private alert: AlertProvider) {
    this.model.medico = this.navParams.get("parametro");
    this.model.data = new Date((new Date()).valueOf() + 1000*3600*24); // pega o próximo dia
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendarConsultaPage', this.model);
  }

  dateChange(data) {
    this.model.data = data;
    console.log(this.model.data);
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
    console.log('Salvando consulta');
    this.alert.successAlert(this.inicio.bind(this));    
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
