import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Consultorio } from '../../models/consultorio.model';
import { ConsultorioProvider } from '../../providers/consultorio/consultorio';

/**
 * Generated class for the ConsultorioAddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultorio-add',
  templateUrl: 'consultorio-add.html',
})
export class ConsultorioAddPage {

  model = new Consultorio();
  submenu = "geral";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: ConsultorioProvider,
    private alert: AlertController,
    private loadingCtrl: LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultorioAddPage');
  }

  logForm() {
    const loading = this.showLoading()
    loading.present();
    this.provider.add(this.model).then(result => {
      console.log('Sucesso', result);
      loading.dismiss();
      this.showSuccessAlert();
      this.backPage()
    }).catch(err => {      
      console.log('Erro', err);
      loading.dismiss();
      this.showErrorAlert(err);
      this.backPage()
    });
  }

  showSuccessAlert() {
    const alert = this.alert.create({
      title: 'Sucesso!',
      subTitle: 'Consultório salvo com sucesso.',
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

}
