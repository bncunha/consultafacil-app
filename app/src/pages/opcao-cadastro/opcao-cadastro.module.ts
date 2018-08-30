import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpcaoCadastroPage } from './opcao-cadastro';

@NgModule({
  declarations: [
    OpcaoCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(OpcaoCadastroPage),
  ],
})
export class OpcaoCadastroPageModule {}
