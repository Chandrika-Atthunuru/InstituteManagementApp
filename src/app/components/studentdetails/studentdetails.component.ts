import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
public studentdetails:any=[]
public id:any="";
constructor(private _studentService:StudentService,private _activatedRoute:ActivatedRoute,private _router:Router){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      this.id=data.id;
    
    _studentService.getdetails(this.id).subscribe(

      (data:Student)=>{
       this.studentdetails=data;
      },
      (err:Student)=>{
       alert("internal server error");
      }
     )
    }  
  )

}
back(){
this._router.navigateByUrl("/dashboard/all-students")
}
}
