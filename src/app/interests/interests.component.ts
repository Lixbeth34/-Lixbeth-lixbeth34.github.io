import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  workExperience : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
	let work1 = {
		ints: "musica"
	};

	let work2 = {
                ints: "dibujo"

        };

	let work3 = {
                ints: "baile"
        };

	this.workExperience.push(work1);
	this.workExperience.push(work2);
	this.workExperience.push(work3);

  }
}
