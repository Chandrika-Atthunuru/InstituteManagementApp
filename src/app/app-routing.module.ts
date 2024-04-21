import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FallbackComponent } from './components/fallback/fallback.component';
import { AuthGuard } from './guards/auth.guard';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { AllStudentsComponent } from './components/all-students/all-students.component';
import { StudentdetailsComponent } from './components/studentdetails/studentdetails.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard],children:[
    {path:'create-student',component:CreateStudentComponent},
    {path:'all-students',component:AllStudentsComponent},
    {path:'studentdetails/:id',component:StudentdetailsComponent}
  ]
  },
  {path:'',component:LoginComponent},
  {path:'**',component:FallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
