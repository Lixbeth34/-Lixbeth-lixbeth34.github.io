import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
	let work1 = {
		fecha: "2014-2015",
		ubicacion: "Córdoba, Ver",
		puesto:"Atención a clientes",
		empresa: "La torre",
		logros: [
			{descripcion: "Jefa de departamento"}
		]
	};

	let work2 = {
                fecha: "2016-2018",
                ubicacion: "Córdoba, Ver",
                puesto:"Ayudante auxiliar de Centro de Copiados",
                empresa: "Papeleria del CBTIS",
		logros: [
                        {descripcion: "Asistencia"}
		]

        };

	let work3 = {
                fecha: "2020-2021",
                ubicacion: "Córdoba, Ver",
                puesto:"Mesera",
                empresa: "Salón de fiesta la Finca San Juan",
		logros: [
                        {descripcion: "Jefe de meseros"}
		]

        };

	this.workExperience.push(work1);
	this.workExperience.push(work2);
	this.workExperience.push(work3);

  }
}
