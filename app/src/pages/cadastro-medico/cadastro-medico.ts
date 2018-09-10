import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Medico } from '../../models/medico.model';
import { LoginPage } from '../login/login';
import { MedicoProvider } from '../../providers/medico/medico';

/**
 * Generated class for the CadastroMedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-medico',
  templateUrl: 'cadastro-medico.html',
})
export class CadastroMedicoPage {
  
  especialidade: Array<{nome: string}>;
  model = new Medico();

  constructor(public navCtrl: NavController, public navParams: NavParams,private provider: MedicoProvider,
    private alert: AlertController,
    private loadingCtrl: LoadingController) {

    this.especialidade = [
      {nome:'Alergia '},
      {nome:'Cardiologia'},
      {nome:'Clinico Geral'},
      {nome:'Dentista'},
      {nome:'Dermatologia'},
      {nome:'Pediatra'}
    ];
  }

  RegistrarMedico() {
    const loading = this.showLoading()
    loading.present();
    this.model.tipo = 1;
    //console.log(this.model.especialidade);
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
    //console.log(this.model);
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroMedicoPage');
  }

}
