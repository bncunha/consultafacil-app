import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendarConsultaPage } from './agendar-consulta';
import { NgCalendarModule  } from 'ionic2-calendar';
import { AlertProvider } from '../../core/alert/alert';
import { HttpModule } from '@angular/http';
import { ConsultaProvider } from '../../providers/consulta/consulta.provider';

@NgModule({
  declarations: [
    AgendarConsultaPage,
  ],
  entryComponents: [
    AgendarConsultaPage
  ],
  imports: [
    NgCalendarModule,
    HttpModule,
    IonicPageModule.forChild(AgendarConsultaPage),
  ],
  providers: [
    AlertProvider,
    ConsultaProvider
  ]
})
export class AgendarConsultaPageModule {}
