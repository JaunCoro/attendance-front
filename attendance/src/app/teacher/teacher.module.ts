import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeacherPage } from './teacher.page';
import { ClassComponent } from './class/class.component';
import { DetailComponent } from './class/detail/detail.component';

const routes: Routes = [
  {
    path: '',
    component: TeacherPage
  },
  { 
    path: ':id',
    component: ClassComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeacherPage, ClassComponent, DetailComponent]
})
export class TeacherPageModule {}
