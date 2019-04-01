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

  ngOnInit() {
    this.name = 'Juan Pablo Coronado Rosales';
  }

  send(code){
  	
    this.service.sendCode(code).subscribe(data => {
      console.log(data)
      this.validation = data
      console.log(this.validation)
      if (this.validation == "You are registered") {
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
