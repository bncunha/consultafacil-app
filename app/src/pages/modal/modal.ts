import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
//import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  medico: any;
  estrela: any = [1,2,3,4]; //array para representa quantas estrelas vao aparecer na avaliacao
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private view: ViewController) {
    this.medico = this.navParams.get("parametro");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  dismiss(){
    this.view.dismiss();
  }

}
