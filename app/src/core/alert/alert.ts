import { AlertController, LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {
  alert: any;
  loading: any;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

  }

  confirmAlert(callback, title?, subTitle?) {
    const _title = title ? title : 'Tem certeza?';
    const _subTitle = subTitle ?  subTitle : 'Você tem certeza que deseja realizar esta operação?';
    this.alert = this.alertCtrl.create({
      title: _title,
      subTitle: _subTitle,
      buttons: [{
        text: 'Sim',
        handler: callback
      }, {
        text: 'Não'
      }],
    });
    this.alert.present();
  }

  successAlert(callback, title?, subTitle?) {
    const _title = title ? title : 'Sucesso';
    const _subTitle = subTitle ?  subTitle : 'Operação realizada com sucesso!';
    this.alert = this.alertCtrl.create({
      title: _title,
      subTitle: _subTitle,
      buttons: [{
        text: 'Ok!',
        handler: callback
      }],
    });
    this.alert.present();
  }

  errorAlert(callback, title?, subTitle?) {
    const _title = title ? title : 'Erro!';
    const _subTitle = subTitle ?  subTitle : 'Operação não concluída!';
    this.alert = this.alertCtrl.create({
      title: _title,
      subTitle: _subTitle,
      buttons: [{
        text: 'Ok!',
        handler: callback
      }],
    });
    this.alert.present();
  }

  destroyAlert() {
    if (alert) {
      this.alert.destroyAlert();
    }
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Carregando...'
    });
  
    this.loading.present();
  
    setTimeout(() => {
      if (this.loading) {
        this.loading.dismiss();
      }
    }, 20000);
  }

  hideLoading() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
  

}
