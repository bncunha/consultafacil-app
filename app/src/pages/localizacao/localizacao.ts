import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;


@IonicPage()
@Component({
  selector: 'page-localizacao',
  templateUrl: 'localizacao.html',
})
export class LocalizacaoPage {

  directionsService = new google.maps.DirectionsService();
  directionsDisplay = new google.maps.DirectionsRenderer();
  map: any;
  startPosition: any;
  originPosition: string;
  destinationPosition: string;
  posicao: any;
  latitude = "";
  longitude = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {

    this.latitude = this.navParams.get("parametro1"); // pega os dados passando como paramentro na tela de home
    this.longitude = this.navParams.get("parametro2"); // "        "            "            "
    
  }

  ionViewDidLoad() {
    this.initializeMap();
    //console.log('ionViewDidLoad LocalizacaoPage');
  } 
  
  initializeMap() {
    this.startPosition = new google.maps.LatLng(this.latitude,this.longitude);
        const mapOptions = {
          zoom: 18,
          center: this.startPosition
        }
 
        this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        this.directionsDisplay.setMap(this.map);
 
        const marker = new google.maps.Marker({
          position: this.startPosition,
          map: this.map
        });
    
  }

  calculateRoute() {
    this.geolocation.getCurrentPosition().then(result => {
      this.posicao = new google.maps.LatLng(result.coords.latitude, result.coords.longitude);
    }).catch((error) => {
      console.log('Error',error)
    });
    if (this.startPosition && this.posicao) {
      const request = {
        // Pode ser uma coordenada (LatLng), uma string ou um lugar
        origin: this.posicao,
        destination: this.startPosition,
        travelMode: 'DRIVING'
      };

      this.traceRoute(this.directionsService, this.directionsDisplay, request);
    }
  }

  traceRoute(service: any, display: any, request: any) {
    service.route(request, function (result, status) {
      if (status == 'OK') {
        display.setDirections(result);
      }
    });
  }

}
