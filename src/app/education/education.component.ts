import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

   workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
        let work1 = {
                fecha: "2014-2015",
                empresa: "Universidad Veracruzana",
                logros: [
                        {descripcion: "Carrera en Ingeniería en Software"}
                ]
        };

        let work2 = {
                fecha: "2016-2018",
                empresa: "CBTIS47",
                logros: [
                        {descripcion: "Carrera técnica en programación"}
                ]

        };

        
        

        this.workExperience.push(work1);
        this.workExperience.push(work2);
       

  }
}

