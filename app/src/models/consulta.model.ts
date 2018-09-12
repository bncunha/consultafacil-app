import { Injectable } from "@angular/core";

@Injectable()
export class Consulta {
	data: any;
	horario: any;
	valor: number;
	consultorio: any;
	medico: any;
	paciente: any;

	constructor() {
	}

	toApi() {
		let newModel = Object.assign({}, this);
    newModel.horario = new Date(newModel.horario).getHours() + ':00';
		newModel.consultorio = "5b98ff097937650a2622def0";
		newModel.medico = newModel.medico.id;
		newModel.paciente = newModel.paciente.id;
		return newModel;
	}
}