import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
	let work1 = {
		language: "Ingles"
	};

	let work2 = {
                language: "español"
           
        };

	this.workExperience.push(work1);
	this.workExperience.push(work2);
	}
}
