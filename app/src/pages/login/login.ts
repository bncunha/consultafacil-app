import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroPage } from '../cadastro/cadastro';
import { PacienteProvider } from '../../providers/paciente/paciente';

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
  
  usuario = { email: '', senha: '' };
  resultado: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private alert: AlertController,
    private loadingCtrl: LoadingController,private provider: PacienteProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(email, senha){
      const loading = this.showLoading()
      loading.present();

      this.provider.login(email, senha).then(result => {
          
          loading.dismiss();

          this.resultado = result;
          console.log(this.resultado);
          if(this.resultado.result == true){
            
            this.navCtrl.setRoot(HomePage);

          }else{
            
            this.usuario.email = "";
            this.usuario.senha = "";
            this.showErrorAlert(this.resultado.menssage);
  
          }
          
      }).catch(err => {      
        console.log('Erro', err);
        loading.dismiss();      
      });
  }
  
  registrar() { // joga para a tela de Cadastro
    
    this.navCtrl.push(CadastroPage);
    
  }

  
  showLoading() {    
    return this.loadingCtrl.create({
      content: "Carregando...",
      // duration: 5000
    });
  }

  showErrorAlert(err) {
    const alert = this.alert.create({
      title: 'Erro!',
      subTitle: err,
      buttons: ['OK']
    });
    alert.present();
  }

  backPage() {
    this.navCtrl.pop();
  }



}
