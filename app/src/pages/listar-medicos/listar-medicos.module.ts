import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListarMedicosPage } from './listar-medicos';

@NgModule({
  declarations: [
    ListarMedicosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListarMedicosPage),
  ],
})
export class ListarMedicosPageModule {}
