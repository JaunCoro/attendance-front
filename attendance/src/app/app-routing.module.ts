import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', redirectTo: 'url', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'teacher', loadChildren: './teacher/teacher.module#TeacherPageModule'},
  { path: 'student', loadChildren: './student/student.module#StudentPageModule'},
  { path: 'code', loadChildren: './code/code.module#CodePageModule'},
  { path: 'redeem', loadChildren: './redeem/redeem.module#RedeemPageModule'},
  { path: 'list', loadChildren: './list/list.module#ListPageModule'},
  { path: 'detail/:id', loadChildren: './detail/detail.module#DetailPageModule'},
  { path: 'url', loadChildren: './url/url.module#UrlPageModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
