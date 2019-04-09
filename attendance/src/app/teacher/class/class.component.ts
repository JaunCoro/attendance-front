import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfigService } from '../../uad.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

	subject
	keys
	lists
	id

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public service: ConfigService) { }

  ngOnInit() {
  	this.subject = this.activatedRoute.snapshot.paramMap.get('id')
  	this.service.getRegistries(this.subject).subscribe(data => {
  		console.log(data)
  		this.lists = data
  		console.log(this.lists[0].id)
  		this.keys = Object.keys(this.lists)
  		console.log(this.keys)
  	})
  }

  getDetail(id){
    this.router.navigate(['detail/'+id])
  }

  go(){
  	this.router.navigate(['code']);
  	this.service.createRegister(
  		localStorage.getItem('subject'),
  		localStorage.getItem('group'),
  		localStorage.getItem('name'),
  		localStorage.getItem('day'),
  		localStorage.getItem('start_time'),
  		localStorage.getItem('end_time')).subscribe(data => {
			  console.log(data)
			  this.id = data
			  localStorage.setItem('registryId', this.id.id)
  	})
  }

  manualList(){
  	this.router.navigate(['list']);
  	this.service.createRegister(
  		localStorage.getItem('subject'),
  		localStorage.getItem('group'),
  		localStorage.getItem('name'),
  		localStorage.getItem('day'),
  		localStorage.getItem('start_time'),
  		localStorage.getItem('end_time')).subscribe(data => {
  			console.log(data)
  			this.id = data
  			localStorage.setItem('registryId', this.id.id)
  	})
  }
}
