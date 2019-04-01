import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../uad.service';

@Component({
  selector: 'list-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(private router: Router, public service: ConfigService) { }

  group
  keys
  checked = false
  students = []

  ngOnInit() {
  	this.service.getGroup(localStorage.getItem('group_id')).subscribe(data => {
  		this.group = data
  		console.log(this.group)
  		console.log(this.group[0].id)
  		this.keys = Object.keys(this.group[0].student)
  		console.log(this.keys)

  		for (var i = 0; i < this.keys.length; ++i) {
  			//console.log("yay")
  			this.students.push({name: this.group[0].student[i].name, isChecked: this.checked})
  		}

  		console.log(this.students)
  	})
  }

  go(){
  	this.service.createDetail(this.students, localStorage.getItem('registryId')).subscribe(data =>{
  		console.log(data)
  	})
  	this.router.navigate(['teacher'])
  }

}
