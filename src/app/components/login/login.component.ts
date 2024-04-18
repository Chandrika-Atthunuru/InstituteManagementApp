import { Component } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Token } from 'src/app/models/token';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 public loginform:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required,Validators.email]),
  password:new FormControl(null,[Validators.required ,Validators.minLength(6),Validators.maxLength(10),Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/)])
 })
 constructor(private _loginService:LoginService, private _router:Router){}
 login(){
  this._loginService.postlogindata(this.loginform.value).subscribe(
    (data:Token)=>{
     localStorage.setItem("token",data.token);
     this._router.navigateByUrl("/dashboard")
     alert("Login successfull")
    },
    (err:Token)=>{
      alert("Login failed")
    }
  )
 }
}
