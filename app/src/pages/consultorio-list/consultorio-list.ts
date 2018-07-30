import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { ConsultorioAddPage } from '../consultorio-add/consultorio-add';
import { ConsultorioProvider } from '../../providers/consultorio/consultorio';
import { Consultorio } from '../../models/consultorio.model';

/**
 * Generated class for the ConsultorioListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultorio-list',
  templateUrl: 'consultorio-list.html',
})
export class ConsultorioListPage {

  models: Consultorio[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private provider: ConsultorioProvider,
    private alertCtr: AlertController,
    private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultorioListPage');
    this.loadAll();
  }

  loadAll() {
    const loading = this.showLoading();
    loading.present();
    this.provider.all().then(result => {
      this.models = result;
      loading.dismiss();
    }).catch(err => {
      loading.dismiss();
      this.showErrorAlert(err);
    });
  }

  add() {
    console.log('Redirecionando página add');
    // direciona para página de adicionar novo consultório
    this.navCtrl.push(ConsultorioAddPage);
  }

  showLoading() {    
    return this.loadingCtrl.create({
      content: "Carregando...",
      // duration: 5000
    });
  }

  showErrorAlert(err) {
    const alert = this.alertCtr.create({
      title: 'Erro!',
      subTitle: err,
      buttons: ['OK']
    });
    alert.present();
  }

  showConfirm(item) {
    const confirm = this.alertCtr.create({
      title: 'Tem certeza?',
      message: 'Deseja excluir este item?',
      buttons: [
        {
          text: 'Não',
        },
        {
          text: 'Sim',
          handler: () => {
            this.delete(item);
          }
        }
      ]
    });
    confirm.present();
  }

  delete(item) {
    alert('Deletar');
    console.log('deletar', item);
  }



}
