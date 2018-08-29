import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroMedicoPage } from '../cadastro-medico/cadastro-medico';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the OpcaoCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-opcao-cadastro',
  templateUrl: 'opcao-cadastro.html',
})
export class OpcaoCadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OpcaoCadastroPage');
  }

  paciente() {
    this.navCtrl.push(CadastroPage);
  }

  medico() {
    this.navCtrl.push(CadastroMedicoPage);
  }

}
