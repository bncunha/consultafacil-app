import { Injectable } from '@angular/core';
import { BaseProvider } from '../baseProvider';

/*
  Generated class for the ConsultorioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedicoProvider {
  baseUrl: string = "medico"; //essa é a string para fazer operações no backend

  constructor(private baseProvider: BaseProvider) {
    console.log('Hello MedicoProvider Provider');

  }

  all(): Promise<any> {
    return this.baseProvider.get(this.baseUrl);
  }

  add(model: any): Promise<any> {
    return this.baseProvider.post(this.baseUrl, model);
  }

  edit(model: any): Promise<any> {
    return;
  }

  delete(model: any): Promise<any> {
    return;
  }

  update(model: any): Promise<any> {
    return;
  }

  login(email:string, senha:string , url: string): Promise<any>{
    console.log("etapa 1");
    console.log("email: " + email);
    console.log("senha: " + senha);
    console.log("url: " + url);
    return this.baseProvider.login(email, senha, url);
  }

}
