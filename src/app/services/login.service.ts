import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient:HttpClient) { }
  postlogindata(data:Login):Observable<Token>{
    return this._httpClient.post<Token>("https://reqres.in/api/login",data)
  }
}
