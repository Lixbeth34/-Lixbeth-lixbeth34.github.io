import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
	let work1 = {
		tema: "angular",
		line: "______________________"
	};

	let work2 = {
                tema: "java",
                line: "__________________"
        };

	let work3 = {
                tema: "python",
                line: "__________________________",
        };

	this.workExperience.push(work1);
	this.workExperience.push(work2);
	this.workExperience.push(work3);

  }
}
