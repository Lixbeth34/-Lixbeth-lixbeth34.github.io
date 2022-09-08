import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.css']
})
export class CertificateComponent implements OnInit {

   workExperience : Array<any> = [];
   constructor() { }

  ngOnInit(): void {
	let work1 = {
		fecha: "2020",
		titulo: "Cisco Redes",
		descripcion:"Certificado por parte de cisco en su página oficial"
	};

	let work2 = {
                fecha: "2019",
                titulo: "Ingles intermedio",
                descripcion:"Certificador Oficial por parte de la uv"

        };


	this.workExperience.push(work1);
	this.workExperience.push(work2);

  }
}
