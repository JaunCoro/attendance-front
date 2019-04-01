import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ConfigService } from '../uad.service'


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

	keys;
  day;
  days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ]

  constructor(private nav: NavController, private router: Router, public service: ConfigService) { }

  id = "69E53B9C88DFF41E";
  cards;

  ngOnInit() {
  	this.service.getCard(localStorage.getItem('uuid')).subscribe(data => {
  		this.cards = data
      console.log(this.cards)
  		this.keys = Object.keys(this.cards)
  	})

    this.day = this.getDay()
    console.log(this.day)
  }

  getDay(){
    let d = new Date()
    let n = this.days[d.getDay()]
    return n
  }

  go(subject: string, id){
  	this.router.navigate(['teacher/'+subject]);
    localStorage.setItem('group_id', this.cards[id].group_id);
    localStorage.setItem('subject', subject)
    localStorage.setItem('start_time', this.cards[id].card[0].period['start_time']);
    localStorage.setItem('end_time', this.cards[id].card[0].period['end_time']);
    localStorage.setItem('group', this.cards[id].group.groupsname);
    localStorage.setItem('day', this.day);
    //console.log(localStorage.getItem('group_id'))
  }

}
