import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-url',
  templateUrl: './url.page.html',
  styleUrls: ['./url.page.scss'],
})
export class UrlPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go(url){
    localStorage.setItem('url', url);
    this.router.navigate(['home']);
  }

}
