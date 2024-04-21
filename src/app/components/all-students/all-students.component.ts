import { Component } from '@angular/core';
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
constructor(private _studentService:StudentService){
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
    (err:any)=>{
      alert("internal error server")
    }
  )
}

}
