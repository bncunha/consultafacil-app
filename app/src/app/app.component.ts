import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PesquizaPage } from '../pages/pesquiza/pesquiza';
import { PerfilPage } from '../pages/perfil/perfil';
import { ConsultorioListPage } from '../pages/consultorio-list/consultorio-list';
import { LoginPage } from '../pages/login/login';
// import { ListPage } from '../pages/list/list';
// import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
// import { LocalizacaoPage } from '../pages/localizacao/localizacao';
// import { ListarMedicosPage } from '../pages/listar-medicos/listar-medicos';
// import { ModalPage } from '../pages/modal/modal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon : string}>;
  consultorioPages: Array<{title: string, component: any, icon : string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Pesquisar Médico', component: PesquizaPage, icon: 'search' },
      { title: 'Perfil', component: PerfilPage, icon: 'md-contact' },
      /*{ title: 'Localização', component: LocalizacaoPage, icon: 'md-map' }
      /*{ title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage},*/
      /*{ title: 'Cadastro', component: CadastroPage, icon:""}*/
    ];

    this.consultorioPages = [
      { title: 'Home', component: HomePage, icon: 'home' },
      { title: 'Perfil', component: PerfilPage, icon: 'md-contact' },
      // { title: 'Pesquisar Médico', component: PesquizaPage, icon: 'search' },
      { title: 'Consultórios', component: ConsultorioListPage, icon: 'medical' },
      /*{ title: 'Localização', component: LocalizacaoPage, icon: 'md-map' }
      /*{ title: 'List', component: ListPage },
      { title: 'Login', component: LoginPage},
      { title: 'Cadastro', component: CadastroPage}*/
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(page.component);
    this.nav.push(page.component);
    console.log(page);
  }
  

}
