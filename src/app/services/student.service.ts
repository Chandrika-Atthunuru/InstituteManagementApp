import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _httpClient:HttpClient) { }
  poststudentdata(data:Student):Observable<Student>{
    return this._httpClient.post<Student>("https://62b9299dff109cd1dc8ca34f.mockapi.io/students",data)
  }

  getstudents():Observable<Student>{
    return this._httpClient.get<Student>("https://62b9299dff109cd1dc8ca34f.mockapi.io/students");
  }

  getpagedstudents(pageNo:number):Observable<Student>{
    return this._httpClient.get<Student>("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?limit=5&page="+pageNo)
  }

  getsortedstudents(column:string,order:string):Observable<Student>{
    return this._httpClient.get<Student>("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?sortBy="+column+"&order="+order)
  }

  getfilteredstudents(filtered:string):Observable<Student>{
    return this._httpClient.get<Student>("https://62b9299dff109cd1dc8ca34f.mockapi.io/students?filter="+filtered)
  }

  getdetails(id:Student):Observable<Student>{
    return this._httpClient.get<Student>("https://62b9299dff109cd1dc8ca34f.mockapi.io/students/"+id)
  }

  
}
