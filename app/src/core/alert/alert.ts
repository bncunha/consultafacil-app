import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {
  alert: any;

  constructor(public alertCtrl: AlertController) {

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

  destroyAlert() {
    if (alert) {
      this.alert.destroyAlert();
    }
  }

}
