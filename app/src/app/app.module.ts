import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { PesquizaPage } from '../pages/pesquiza/pesquiza';
import { PerfilPage } from '../pages/perfil/perfil';
import { LocalizacaoPage } from '../pages/localizacao/localizacao';
import { ListarMedicosPage } from '../pages/listar-medicos/listar-medicos';
import { ModalPage } from '../pages/modal/modal';
import { ConsultorioListPageModule } from '../pages/consultorio-list/consultorio-list.module';
import { ConsultorioProvider } from '../providers/consultorio/consultorio';
import { BaseProvider } from '../providers/baseProvider';
import { HttpModule } from '../../node_modules/@angular/http';
import { LoginPageModule } from '../pages/login/login.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    PesquizaPage,
    PerfilPage,
    LocalizacaoPage,
    ListarMedicosPage,
    ModalPage,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ConsultorioListPageModule,
    LoginPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CadastroPage,
    PesquizaPage,
    PerfilPage,
    LocalizacaoPage,
    ListarMedicosPage,
    ModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    ConsultorioProvider,
    BaseProvider
  ]
})
export class AppModule {}
