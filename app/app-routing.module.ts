import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
 
  { path: 'student', component: StudentsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }