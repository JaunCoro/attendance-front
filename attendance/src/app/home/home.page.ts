import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpParams } from  "@angular/common/http";
import { ConfigService } from '../uad.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

	user
	error: string;

	private loading;

	constructor(private router: Router, private loadingctrl: LoadingController, public service: ConfigService){}

	ngOnInit(){

	}

	go(user, password){
		this.service.sendUser(user, password).subscribe(data => {
			console.log(data)
			this.user = data;
			//console.log(this.user.user['uuid'])
			if (this.user.user['role'] == "teacher") {
				localStorage.setItem("uuid", this.user.user['uuid']);
				localStorage.setItem("name", this.user.user['name']);
				console.log(localStorage.getItem('name'))
				this.router.navigate(["teacher"]);
			}else if (this.user.user['role'] == "student") {
				localStorage.setItem("email", this.user.user['email']);
				console.log(localStorage.getItem('email'));
				this.router.navigate(["student"]);
			}
		})
	}
}