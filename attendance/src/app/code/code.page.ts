import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../uad.service';
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Component({
  selector: 'app-code',
  templateUrl: './code.page.html',
  styleUrls: ['./code.page.scss'],
})
export class CodePage implements OnInit {

  code
	color
	circle
	countdown_number
	setInterval = setInterval
	keys;
	checked = false;
	group
	students = []

  constructor(private router: Router, public service: ConfigService) { }

  ngOnInit() {
		this.service.getGroup(localStorage.getItem('group_id')).subscribe(data => {
			this.group = data;
			this.keys = Object.keys(this.group[0].student)

			for (var i = 0; i < this.keys.length; ++i) {
  			//console.log("yay")
  			this.students.push({name: this.group[0].student[i].name, isChecked: this.checked})
			}
			
			console.log(this.students);

			this.service.createDetail(this.students, localStorage.getItem('registryId')).subscribe(data =>{
				console.log(data)
			})
		})

  	setTimeout(this.opensnack.bind(this), 10000)
  	setInterval(this.generateCode.bind(this), 15000)
  	this.color = "primary"
    this.service.getCode().subscribe(data => this.code = data[1])
  	this.circle = "circle"
  	this.countdown_number = "countdown-number"

  	let countdownNumberEl: any = document.getElementById('countdown-number');
		let countdown = 15;

		countdownNumberEl.textContent = countdown;

		setInterval(function() {
		  countdown = --countdown <= 0 ? 15 : countdown;

		  countdownNumberEl.textContent = countdown;
		}, 1000);
  }


  generateCode(){
  	this.color = "primary"
  	this.circle = "circle"
  	this.countdown_number = "countdown-number"
  	this.service.getCode().subscribe(data => this.code = data[1])
  	setTimeout(this.opensnack.bind(this), 10000)
  }

  opensnack() : void {
    this.color = "danger"
    this.circle = "circleRed"
    this.countdown_number = "countdown-number-red"
  }

  go(){
    this.router.navigateByUrl('/teacher')
  }
}
