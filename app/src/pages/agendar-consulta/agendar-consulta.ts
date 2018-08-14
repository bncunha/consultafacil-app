import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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
  medico: any;
  calendar = {
    mode: 'month',
    currentDate: new Date(),
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.medico = this.navParams.get("parametro");
    console.log(this.medico);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AgendarConsultaPage');
  }

}
