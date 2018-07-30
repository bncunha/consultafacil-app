import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultorioListPage } from './consultorio-list';
import { ConsultorioAddPageModule } from '../consultorio-add/consultorio-add.module';
import { ConsultorioProvider } from '../../providers/consultorio/consultorio';

@NgModule({
  declarations: [
    ConsultorioListPage,
  ],
  imports: [
    ConsultorioAddPageModule,
    IonicPageModule.forChild(ConsultorioListPage),
  ],
  providers: [
    ConsultorioProvider
  ]
})
export class ConsultorioListPageModule {}
