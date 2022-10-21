import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private htpp:HttpClient) { }

  addData=(data:any)=>{
    return this.htpp.post("http://localhost:8080/addsocialmedia",data)
  }
}
