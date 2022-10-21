import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }
 
name=""
dob=""
phone_no=""
place=""
emailid=""
password=""
confirmpassword=""

readValues=()=>{
  let data={
    "name":this.name,
    "dob":this.dob,
    "phone_no":this.phone_no,
    "place":this.place,
    "emailid":this.emailid,
    "password":this.password,
    "confirmpassword":this.confirmpassword
  }
  console.log(data)
  this.myapi.addData(data).subscribe(
    (data)=>{
      alert("successfully added")
    }
  )
}

  ngOnInit(): void {
  }

}
