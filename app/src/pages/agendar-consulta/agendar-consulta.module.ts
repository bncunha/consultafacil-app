import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendarConsultaPage } from './agendar-consulta';
import { NgCalendarModule  } from 'ionic2-calendar';
import { AlertProvider } from '../../core/alert/alert';

@NgModule({
  declarations: [
    AgendarConsultaPage,
  ],
  entryComponents: [
    AgendarConsultaPage
  ],
  imports: [
    NgCalendarModule,
    IonicPageModule.forChild(AgendarConsultaPage),
  ],
  providers: [
    AlertProvider
  ]
})
export class AgendarConsultaPageModule {}
