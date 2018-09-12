import { Injectable } from '@angular/core';
import { BaseProvider } from '../baseProvider';

/*
  Generated class for the consultaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultaProvider {
  baseUrl: string = "consulta"; //essa é a string para fazer operações no backend

  constructor(private baseProvider: BaseProvider) {
    console.log('Hello consultaProvider Provider');

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
    return this.baseProvider.put(`${this.baseUrl}/${model.id}`, model);
  }

  getByPaciente(idPaciente: string): Promise<any> {
    return this.baseProvider.post(`${this.baseUrl}/bypaciente/${idPaciente}`, null);
  }

  getByMeidco(idMedico: string): Promise<any> {
    return this.baseProvider.post(`${this.baseUrl}/bymedico/${idMedico}`, null);
  }

}