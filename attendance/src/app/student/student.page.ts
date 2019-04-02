import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ModalPage } from '../modal/modal.page';
import { ConfigService } from '../uad.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  constructor(private router: Router, public service: ConfigService, private activatedRoute: ActivatedRoute) { }

  keys;
  subject;
  hora;
  cards
  color = "dark";
  colorDanger = "danger";
  user;

	clases = [
		{
			clase: "Desarrollo de Aplicaciones",
			hora: "7:00 - 7:50",
			salon: "Lab 2",
			tFaltas: 8,
			faltas: 2
		},
		{
			clase: "Sistemas Operativos",
			hora: "7:50 - 10:20",
			salon: "Lab 5",
			tFaltas: "6",
			faltas: 5
		},
		{
			clase: "Mercadotecnia",
			hora: "12:00 - 13:50",
			salon: "Aula 3",
			tFaltas: 8,
			faltas: 0
		},
	]

  ngOnInit() {
  	//console.log(this.clases)
  	this.service.getStudentCards(localStorage.getItem('email')).subscribe(data => {
  		console.log(data);
  		this.cards = data;
			//console.log(this.cards[0].group[0].lesson[0].subject.name);
			this.keys = Object.keys(this.cards[0].group[0].lesson)
			console.log(this.keys)
  	})
  	//console.log(this.keys)
  }

  go(key: number){
  	
  }

	code(key){
		localStorage.setItem('studentSub', this.cards[0].group[0].lesson[key].subject.name)
		this.router.navigate(['redeem']);
	}
}
