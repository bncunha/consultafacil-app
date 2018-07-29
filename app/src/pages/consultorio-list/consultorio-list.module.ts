import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultorioListPage } from './consultorio-list';
import { ConsultorioAddPageModule } from '../consultorio-add/consultorio-add.module';

@NgModule({
  declarations: [
    ConsultorioListPage,
  ],
  imports: [
    ConsultorioAddPageModule,
    IonicPageModule.forChild(ConsultorioListPage),
  ],
})
export class ConsultorioListPageModule {}
