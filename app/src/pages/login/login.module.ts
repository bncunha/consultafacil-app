import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { UserLoggedProvider } from '../../providers/user-logged/user-logged';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  providers: [
    UserLoggedProvider
  ]
})
export class LoginPageModule {}
