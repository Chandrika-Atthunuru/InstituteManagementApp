import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { Token } from 'src/app/models/token';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
public studentform:FormGroup=new FormGroup({
  name:new FormControl(),
  gender:new FormControl(),
  mobile:new FormControl(),
  email:new FormControl(),
  batch:new FormControl(),
  address:new FormGroup({
    city:new FormControl(),
    mandal:new FormControl(),
    district:new FormControl(),
    state:new FormControl(),
    pincode:new FormControl(),
  }),
  education:new FormArray([]),
  company:new FormGroup({
    name:new FormControl(),
    location:new FormControl(),
    package:new FormControl(),
    offerDate:new FormControl()
  }),
  sourceType:new FormControl(),
})
get educationFormArray(){
  return this.studentform.get("education")as FormArray
 }
 add(){
   this.educationFormArray.push(
    new FormGroup({
      qualification: new FormControl(),
      year: new FormControl(),
      percentage: new FormControl(),
    })
   )
 }
delete(i:number){
  this.educationFormArray.removeAt(i)
}

submit(){

}
}
