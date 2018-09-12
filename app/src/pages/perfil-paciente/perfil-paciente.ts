import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserLoggedProvider } from '../../providers/user-logged/user-logged';
import { Paciente } from '../../models/paciente.model';

/**
 * Generated class for the PerfilPacientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil-paciente',
  templateUrl: 'perfil-paciente.html',
})
export class PerfilPacientePage {

  model = new Paciente();

  constructor(public navCtrl: NavController, public navParams: NavParams,private userLogged: UserLoggedProvider) {

    this.model = userLogged.usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPacientePage');
  }

}
