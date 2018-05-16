import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquizaPage } from './pesquiza';

@NgModule({
  declarations: [
    PesquizaPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquizaPage),
  ],
})
export class PesquizaPageModule {}
