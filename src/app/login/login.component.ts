import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  angForm: FormGroup;
  useremail: string = "admin";
  userpass: string = "admin";
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      email: [''],
      password: ['']
    });
  }
  onClickSubmit(email, password) {
    // alert('Your Email is : ' + email);
    // alert('password ' +password);
    if(this.useremail === email && this.userpass === password){
      alert('welcome in home screen');
    }
    else {
      alert('Please check your user name and password');
    }
  }

  ngOnInit() {
  }

}