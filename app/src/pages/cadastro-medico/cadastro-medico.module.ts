import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMedicoPage } from './cadastro-medico';
import { MedicoProvider } from '../../providers/medico/medico';

@NgModule({
  declarations: [
    CadastroMedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMedicoPage),
  ],
  providers: [
    MedicoProvider
  ]
})
export class CadastroMedicoPageModule {}
