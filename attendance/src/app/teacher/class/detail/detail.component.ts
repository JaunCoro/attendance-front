import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ConfigService } from '../../../uad.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

	id

  constructor(private activatedRoute: ActivatedRoute, private router: Router, public service: ConfigService) { }

  ngOnInit() {
  	this.id = this.activatedRoute.snapshot.paramMap.get('id')
  }

}
