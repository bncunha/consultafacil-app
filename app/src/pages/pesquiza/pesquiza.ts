import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { ListarMedicosPage } from '../listar-medicos/listar-medicos';
import { UserLoggedProvider } from '../../providers/user-logged/user-logged';

/**
 * Generated class for the PesquizaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquiza',
  templateUrl: 'pesquiza.html',
})
export class PesquizaPage {

  especialidade: Array<{nome: string, medicos: any}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public platform: Platform,
  private userLogged: UserLoggedProvider) {
    this.especialidade = [
      {nome:'Alergia ',medicos:[{nome:'Drª. Maria',esp:'Alergista',est:5,avatar:'../assets/imgs/img_avatar2.png',valor:'70',clin:'Clinica Morada',end:'Rua almirante nº 10, Alvorada, Vila Velha'},{nome:'Drª. Laura',esp:'Alergista',est:4,avatar:'../assets/imgs/img_avatar2.png',valor:'90',clin:'Clinica Saúde +',end:'Rua cascata nº 2, Campo Grande, Cariacica'}]},
      {nome:'Cardiologia',medicos:[{nome:'Dr. Marcos',est:4,esp:'Cardiologista',avatar:'../assets/imgs/img_avatar.png',valor:'100',clin:'Clinica Coração Bom',end:'Rua estrela nº 5, Praia da Costa, Vila Velha'},{nome:'Drª. Penha',est:5,esp:'Cardiologista',avatar:'../assets/imgs/img_avatar2.png',valor:'95',clin:'Clinica Morada',end:'Rua almirante nº 10, Alvorada, Vila Velha'}]},
      {nome:'Clinico Geral',medicos:[{nome:'Dr. Carlos da Silva',est:5,esp:'Clinico Geral',avatar:'../assets/imgs/img_avatar.png',valor:'80',clin:'Clinica Saúde +',end:'Rua cascata nº 2, Campo Grande, Cariacica'},{nome:'Drª. Carla',est:3,esp:'Clinico Geral',avatar:'../assets/imgs/img_avatar2.png',valor:'70',clin:'Clinica Saúde Boa',end:'Rua 10 nº 5, Ibes, Vila Velha'}]},
      {nome:'Dentista',medicos:[{nome:'Dr. Caio',esp:'Dentista',est:4,avatar:'../assets/imgs/img_avatar.png',valor:'Valor diferente para cada serviço!',clin:'Clinica Sorriso',end:'Rua 6 nº 102, Itaparica, Vila Velha'},{nome:'Drª. Priscila Souza',esp:'Dentista',est:5,avatar:'../assets/imgs/img_avatar2.png',valor:'Valor diferente para cada serviço!',clin:'Clinica Sorriso Perfeito',end:'Rua 100 nº 1, Itaparica, Vila Velha'}]},
      {nome:'Dermatologia',medicos:[{nome:'Drª. Thais',est:5,esp:'Dermatologista',avatar:'../assets/imgs/img_avatar2.png',valor:'120',clin:'Clinica Pele Limpa',end:'Rua neve nº 32, Carapina, Serra'},{nome:'Drª. Tamiris',esp:'Dermatologista',est:5,avatar:'../assets/imgs/img_avatar2.png',valor:'120',clin:'Clinica Pele Limpa',end:'Rua neve nº 32, Carapina, Serra'}]},
      {nome:'Pediatra',medicos:[{nome:'Drª. Maria do Socorro',est:5,esp:'Pediatra',avatar:'../assets/imgs/img_avatar.png',valor:'70',clin:'Clinica Saúde Boa',end:'Rua 10 nº 5, Ibes, Vila Velha'},{nome:'Drª. Joana',esp:'Pediatra',est:4,avatar:'../assets/imgs/img_avatar2.png',valor:'80',clin:'Clinica Bem Estar',end:'Av. Expedito García, Campo Grande, Cariacica'}]}
    ];
    //console.log(this.especialidade);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesquizaPage');
    console.log('Usuario logado', this.userLogged.getUsuario());
  }

  listaMedicos(medicos){
    //console.log(medicos);
    //Vai abrir a tela desejada, onde a mesma deve ser importada.Sera passado um paramento para essa view
    this.navCtrl.push(ListarMedicosPage,{parametro: medicos});
  }

}
