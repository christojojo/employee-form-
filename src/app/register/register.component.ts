import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder) {}
submit = false
employeeform=this.fb.group({
  Name:['',Validators.required],
  Addres:[''],
  Dob:[''],
  Role:[''],
  Phone:[''],
  Gender:['']
})
 



  ngOnInit(): void {
  }
  get f(){
    return this.employeeform.controls 
  }
  onsubmit(){
    this.submit=true
    console.log('clicked');
    console.log('f',this.f);
   
  }
register(){
  alert('registered succesfully')
}

}
