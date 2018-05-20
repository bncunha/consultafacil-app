import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform , ModalController, ModalOptions, } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
//import { ModalController } from 'ionic-angular/components/modal/modal-controller';

/**
 * Generated class for the ListarMedicosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listar-medicos',
  templateUrl: 'listar-medicos.html',
})
export class ListarMedicosPage {

  medicos:Array<{nome:string,avatar:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform, private modalCtrl:ModalController) {
    
    this.medicos = this.navParams.get("parametro");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListarMedicosPage');
  }

  abrirModal(medico){
    let modal = this.modalCtrl.create(ModalPage,{parametro:medico});
    modal.present();
  }

}
