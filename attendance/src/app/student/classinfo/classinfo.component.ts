import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-classinfo',
  templateUrl: './classinfo.component.html',
  styleUrls: ['./classinfo.component.scss']
})
export class ClassinfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  subject

  ngOnInit() {
  	this.subject = this.activatedRoute.snapshot.paramMap.get('id')
  }

}
