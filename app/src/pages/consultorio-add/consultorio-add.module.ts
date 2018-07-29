import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultorioAddPage } from './consultorio-add';

@NgModule({
  declarations: [
    ConsultorioAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultorioAddPage),
  ],
})
export class ConsultorioAddPageModule {}
