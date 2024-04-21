import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent {
public studentsdata:any= [];
public pageno:number=0;
public column:string="";
public order:string="";
public filtered:string="";
constructor(private _studentService:StudentService, private _router:Router){
_studentService.getstudents().subscribe(
  (data:Student)=>{
    this.studentsdata = data;
  },
  (err:Student)=>{
    alert("internal server error")
  }
)
}

pagination(){
  this._studentService.getpagedstudents(this.pageno).subscribe(
    (data:Student)=>{
      this.studentsdata=data;
    },
    (err:Student)=>{
      alert("internal error server")
    }
  )
}

sorting(){
  this._studentService.getsortedstudents(this.column,this.order).subscribe(
    (data:Student)=>{
      this.studentsdata=data;
    },
    (err:Student)=>{
      alert("internal server error")
    }
  )
}

filtering(){
  this._studentService.getfilteredstudents(this.filtered).subscribe(
    (data:Student)=>{
      this.studentsdata=data
    },
    (err:Student)=>{
      alert("internal server error")
    }
  )
}

view(id:any){
 this._router.navigateByUrl("/dashboard/studentdetails/"+id)
 
}

}
