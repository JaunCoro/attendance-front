import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfigService } from '../uad.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public service: ConfigService) { }
  
  id
  students = []
  student
  keys

  ngOnInit() {
  	this.students = []
  	this.id = this.activatedRoute.snapshot.paramMap.get('id');
  	this.service.getDetail(this.id).subscribe(data =>{
  		//console.log(data)
  		this.student = data
  		console.log(this.student)
  		this.keys = Object.keys(this.student)

  	})
  }

  go(){
  	for (var i = 0; i < this.keys.length; ++i) {
  		this.students.push({id: this.student[i].id, isChecked: this.student[i].isChecked, registry_id: this.student[i].registry_id})
  	}

  	console.log(this.students)

  	this.service.updateDetail( this.students, this.student[0].registry_id).subscribe(data =>{
  		console.log(data)
  		//this.student
  		this.router.navigate(['teacher'])
  	})
  }

}
