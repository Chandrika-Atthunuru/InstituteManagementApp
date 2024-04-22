import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { Token } from 'src/app/models/token';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent {
public id:any="";
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
constructor(private _studentService:StudentService,private _activatedRoute:ActivatedRoute){
_activatedRoute.params.subscribe(
  (data:any)=>{
   this.id=data.id;
    if(this.id){
      _studentService.getdetails(this.id).subscribe(
        (data:Student)=>{
          this.studentform.patchValue(data);
        }
       )
    }
   
  }

)
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
if(this.id){
  this._studentService.editdetails(this.id,this.studentform.value).subscribe(
   (data:Student)=>{
    alert("Edited succesfully");
    this.studentform.reset()
   },
   (err:Student)=>{
    alert("Edit is failed")
   }
  )
}
else{
  this.studentform.markAllAsTouched()
  this._studentService.poststudentdata(this.studentform.value).subscribe(
    (data:Student)=>{
      alert("created successfully")
      this.studentform.reset();
    },
    (err:Student)=>{
     alert("internal server error")
    }
  )
}

}
}
