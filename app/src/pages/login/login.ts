import { Component, ViewChild, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild(Nav) nav: Nav;
  @Input() btnFooter: string;

  user = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(form){
    console.log(form.value);
    if(form.value.email == 'mario123@gmail.com' && form.value.password == '12345'){
      this.abrirTelaHome();
    }else{
      alert("error");
    }
  }

  abrirTelaHome(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a cadastroContaPage
    this.navCtrl.push(HomePage);
  }
  abrirTelaCadastro(){
    //Vai abrir a tela desejada, onde a mesma deve ser importada, assim, vou achamar a cadastroContaPage
    this.navCtrl.push(CadastroPage);
  }

}
