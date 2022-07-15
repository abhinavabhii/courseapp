import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  viewCourse=()=>{
    return this.http.get("https://mylinkurcodes.app.herokuapp.com/getcourses")
  }
    AddCourse=(course:any)=>{
      return this.http.post<any>("https://mylinkurcodes.app.herokuapp.com/addcourse",course) 
    }
  }

