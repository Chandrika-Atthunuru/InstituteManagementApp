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
}
