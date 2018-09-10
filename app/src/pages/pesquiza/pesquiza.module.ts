import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquizaPage } from './pesquiza';
import { UserLoggedProvider } from '../../providers/user-logged/user-logged';

@NgModule({
  declarations: [
    PesquizaPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquizaPage),
  ], providers: [
    UserLoggedProvider
  ]
})
export class PesquizaPageModule {}
