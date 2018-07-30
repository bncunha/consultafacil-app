import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultorioAddPage } from './consultorio-add';
import { ConsultorioProvider } from '../../providers/consultorio/consultorio';

@NgModule({
  declarations: [
    ConsultorioAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultorioAddPage),
  ],
  providers: [
    ConsultorioProvider
  ]
})
export class ConsultorioAddPageModule {}
