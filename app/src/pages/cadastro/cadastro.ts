import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Paciente } from '../../models/paciente.model';
import { PacienteProvider } from '../../providers/paciente/paciente';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  model = new Paciente();

  

  constructor(public navCtrl: NavController, public navParams: NavParams,private provider: PacienteProvider,
    private alert: AlertController,
    private loadingCtrl: LoadingController) {
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }


  RegistrarPaciente() {
    const loading = this.showLoading()
    loading.present();
    this.provider.add(this.model).then(result => {
      console.log('Sucesso', result);
      loading.dismiss();
      this.showSuccessAlert();
      this.backPage()
      this.irParaTelaLogin();
    }).catch(err => {      
      console.log('Erro', err);
      loading.dismiss();
      this.showErrorAlert(err);
      this.backPage()
    });
    console.log(this.model);
  }

  showSuccessAlert() {
    const alert = this.alert.create({
      title: 'Sucesso!',
      subTitle: 'Dados salvo com sucesso.',
      buttons: ['OK']
    });
    alert.present();
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

  showLoading() {    
    return this.loadingCtrl.create({
      content: "Carregando...",
      // duration: 5000
    });
  }

  irParaTelaLogin(){
    this.navCtrl.push(LoginPage);
  }

}
