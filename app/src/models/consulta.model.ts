import { Injectable } from "@angular/core";

@Injectable()
export class Consulta {
	data: any;
	horario: string;
	valor: number;
	consultorio: any;
	medico: any;
	paciente: any;

	constructor() {
	}
}