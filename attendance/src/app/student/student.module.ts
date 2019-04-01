import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentPage } from './student.page';
import { ClassinfoComponent } from './classinfo/classinfo.component';

const routes: Routes = [
  {
    path: '',
    component: StudentPage
  },
  {
    path: ':id',
    component: ClassinfoComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentPage, ClassinfoComponent]
})
export class StudentPageModule {}
