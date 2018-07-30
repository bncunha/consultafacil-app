import { Injectable } from "@angular/core";

@Injectable()
export class Consultorio {
	razaoSocial: string;
	nomeFantasia: string;
	cnpj: string;
	endereco: any;
	emails: any[];
	telefones: any[];

	constructor() {
		this.endereco = {};
		this.emails = [];
		this.telefones = [];
	}
}