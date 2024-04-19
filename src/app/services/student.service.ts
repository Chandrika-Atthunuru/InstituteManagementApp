import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token } from '../models/token';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }
  poststudentdata(data:Student):Observable<Token>{
    return this._httpClient.post<Token>("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data)
  }
}
