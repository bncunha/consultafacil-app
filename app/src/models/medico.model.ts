import { Injectable } from "@angular/core";

@Injectable()
export class Medico {
	nome: string;
	tipo: number;
	dataNascimento: string;
	cpf: string;
	telefone: string;
	email: string;
	senha: string;
	numeroCRM: string;
	dataInscricaoCRM: string;
	periodovalidadeCRM: string;
	especialidades: any[];

	constructor() {
		
		this.especialidades = [];
	}
}