import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private navParams: NavParams, private modalCtrl: ModalController) { }

  passedID = null

  ngOnInit() {
  	this.passedID = this.navParams.get('custom_id')
  }

  close(){
  	this.modalCtrl.dismiss();
  }

}
