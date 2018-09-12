import { Injectable } from "@angular/core";

@Injectable()
export class Consulta {

	static SITUACAO = {
		Agendado: 0,
		Realizado: 1,
		Cancelado: 2
	}

	data: any;
	horario: any;
	valor: number;
	consultorio: any;
	medico: any;
	paciente: any;
	especialidade: string;
	situacao: any;

	constructor() {
	}

	toApi() {
		let newModel = Object.assign({}, this);
		if (typeof newModel.horario !== 'string') {
			newModel.horario = new Date(newModel.horario).getHours() + ':00';
		}
		newModel.consultorio = "5b98ff097937650a2622def0";
		newModel.medico = newModel.medico ? newModel.medico.id : null;
		newModel.paciente = newModel.paciente.id;
		return newModel;
	}
}