import { Component, ViewChild, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalizacaoPage } from '../localizacao/localizacao';
import { Nav, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  @Input() btnFooter: string;

  consulta: Array<{med: string, espec: string, valorCons: string, data:string, hora:string, lat:string, log:string}>;

  constructor(public platform: Platform, public navCtrl: NavController) {

    this.consulta = [
      
      {med:'Dr. Carlos da Silva',espec:'Clinico Geral',valorCons:'80',data:'05/06/2018',hora:'14:30hrs',lat:'-20.2944175',log:'-40.3048715'},
      {med:'Drª. Maria do Socorro',espec:'Pediatra',valorCons:'60',data:'16/07/2018',hora:'16:00hrs',lat:'-20.3184527',log:'-40.4246079'},
      {med:'Drª. Priscila Souza',espec:'Dentista',valorCons:'80 a 200',data:'20/06/2018',hora:'10:00hrs',lat:'-20.316031',log:'-40.3976571'}
    ];
    
  }
  
  abrirTela(lat,log){
    console.log(lat);
    console.log(log);
    //Vai abrir a tela desejada, onde a mesma deve ser importada
    this.navCtrl.push(LocalizacaoPage,{parametro1:lat, parametro2: log});
  }
}
