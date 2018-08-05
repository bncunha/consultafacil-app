import { Injectable } from "@angular/core";

@Injectable()
export class Paciente {
	nome: string;
	dataNascimento: string;
    cpf: string;
    telefone: string;
	email: string;
	senha: string;
	consultas: any[];

	constructor() {
		
		this.consultas = [];
	}
}