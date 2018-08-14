import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AgendarConsultaPage } from './agendar-consulta';
import { NgCalendarModule  } from 'ionic2-calendar';

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
})
export class AgendarConsultaPageModule {}
