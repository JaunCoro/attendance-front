import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from '../uad.service';

@Component({
  selector: 'app-redeem',
  templateUrl: './redeem.page.html',
  styleUrls: ['./redeem.page.scss'],
})
export class RedeemPage implements OnInit {

	overlayHidden: boolean = true;

  constructor(private router: Router, public service: ConfigService) { }

  name
  validation
  cards
  lists
  keys
  json = []
  id

  ngOnInit() {
    console.log(localStorage.getItem('studentName'))
    this.service.getRegistries(localStorage.getItem('studentSub')).subscribe(data => {
      console.log(data)
      this.lists = data
      console.log(this.lists[0].id)
      this.keys = Object.keys(this.lists)
      console.log(this.keys)
      this.id = this.lists[this.keys.length-1].id
       console.log(this.id)
    })
  }

  send(code){
  	
    this.service.sendCode(code).subscribe(data => {
      console.log(data)
      this.validation = data
      console.log(this.validation)
      if (this.validation == "Success") {
        this.json.push({name: localStorage.getItem('studentName'), isChecked: true})
        console.log("el id es: " + this.id)
        this.service.updateStudent(this.json, this.id).subscribe(data => {
          console.log(data)
        })
        this.overlayHidden = false
        setTimeout(this.opensnack.bind(this), 5000)
      }
    });
  }

  hideOverlay() {
    this.overlayHidden = true;
	}

	opensnack() : void {
  	this.overlayHidden = true;
  	this.router.navigate(['student']);
  }
}
