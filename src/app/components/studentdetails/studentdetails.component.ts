import { Component } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.component.html',
  styleUrls: ['./studentdetails.component.css']
})
export class StudentdetailsComponent {
public id:any=""
public studentdetails:any=[]
constructor(private _studentService:StudentService){
_studentService.getdetails(this.id).subscribe(
 (data:Student)=>{
  this.studentdetails=data;
 },
 (err:Student)=>{
  alert("internal server error");
 }
)

}
}
