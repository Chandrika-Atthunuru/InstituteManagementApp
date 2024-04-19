import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student';
import { Token } from 'src/app/models/token';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
public studentform:FormGroup=new FormGroup({
  name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
  gender:new FormControl(null,[Validators.required]),
  mobile:new FormControl(null,[Validators.required,Validators.min(1000000000),Validators.max(9999999999)]),
  email:new FormControl(null,[Validators.required,Validators.email]),
  batch:new FormControl(null,[Validators.required]),
  address:new FormGroup({
    city:new FormControl(null,[Validators.required]),
    mandal:new FormControl(null,[Validators.required]),
    district:new FormControl(null,[Validators.required]),
    state:new FormControl(null,[Validators.required]),
    pincode:new FormControl(null,[Validators.required,Validators.min(100000),Validators.max(999999)]),
  }),
  education:new FormArray([]),
  company:new FormGroup({
    name:new FormControl(null,[Validators.required]),
    location:new FormControl(null,[Validators.required]),
    package:new FormControl(null,[Validators.required]),
    offerDate:new FormControl(null,[Validators.required])
  }),
  sourceType:new FormControl(null,[Validators.required]),
})
constructor(){
  this.studentform.get('sourceType')?.valueChanges.subscribe(
    (data:any)=>{
      if(data=='direct'){
        this.studentform.addControl("sourceForm",new FormControl(null,[Validators.required]))
        this.studentform.removeControl("referralName")
      }
      else{
        this.studentform.addControl("referralName",new FormControl(null,[Validators.required]))
        this.studentform.removeControl("sourceForm")
      }
    }
  )
}
get educationFormArray(){
  return this.studentform.get("education")as FormArray
 }
 add(){
   this.educationFormArray.push(
    new FormGroup({
      qualification: new FormControl(null,[Validators.required]),
      year: new FormControl(null,[Validators.required]),
      percentage: new FormControl(null,[Validators.required]),
    })
   )
 }
delete(i:number){
  this.educationFormArray.removeAt(i)
}

submit(){
this.studentform.markAllAsTouched();
}
}
