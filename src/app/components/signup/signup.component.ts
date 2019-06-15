import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isGmail } from '../../validationInput';

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
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.email,
        isGmail
      ]),
      name: new FormControl('', Validators.required),
      age: new FormControl('', [
        Validators.pattern('^[0-9]+$'),
        Validators.max(100),
        Validators.min(1)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      repassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }
  onSignUp() {
    const formValue = this.signUpForm.value;
    const email = this.signUpForm.get('email').value;
    console.log(formValue, email);
  }
  passwordMustMatch(): boolean {
    const password = this.signUpForm.get('password');
    const repassword = this.signUpForm.get('repassword');
    if (password.valid &&
      password.value !== repassword.value &&
      password.touched && repassword.touched
      ) {
      return true; // show message
    }
    return false;
  }
}

