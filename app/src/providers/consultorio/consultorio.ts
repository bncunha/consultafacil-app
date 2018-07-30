import { Injectable } from '@angular/core';
import { BaseProvider } from '../baseProvider';

/*
  Generated class for the ConsultorioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultorioProvider {
  baseUrl: string = "consultorio"; //essa é a string para fazer operações no backend

  constructor(private baseProvider: BaseProvider) {
    console.log('Hello ConsultorioProvider Provider');

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

}
