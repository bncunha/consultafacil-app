import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroPage } from './cadastro';
import { PacienteProvider } from '../../providers/paciente/paciente';

@NgModule({
  declarations: [
    CadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroPage),
  ],
  providers: [
    PacienteProvider
  ]
})
export class CadastroPageModule {}
