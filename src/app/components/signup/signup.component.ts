import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      email: new FormControl(),
      name: new FormControl(''),
      age: new FormControl(''),
      password: new FormControl(''),
      repassword: new FormControl(''),
    });
  }

}
