import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultorioListPage } from './consultorio-list';

@NgModule({
  declarations: [
    ConsultorioListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultorioListPage),
  ],
})
export class ConsultorioListPageModule {}
