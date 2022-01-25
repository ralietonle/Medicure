import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import  checkPassword  from '../validators/checkPassword';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup = this.fb.group({ });
  signupMessage: string = '';
  choices:any[]= [{content:"Patient",value:"patient"},{content:"Doctor",value:"doctor"}]
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router) { 
    
  }
  get username(){
    return this.signupForm.get('username');
  }
  get password(){
    return this.signupForm.get('password');
  }
  get email(){
    return this.signupForm.get('email');
  }
  get category(){
    return this.signupForm.get('category');
  }
  onSubmit(): void {
    var email = this.email!.value;
    var password = this.password!.value;
    var category = this.category!.value;
    var username = this.username!.value;
    this.authService.signUpUser(email,username,password,category).then(
      (response) => {
        console.log(response);
        this.router.navigate(['/auth/signin']);
      },
      (error) => {
        this.signupMessage = error;
        this.signupForm.reset();
        this.router.navigate(['auth/signup']);
      }
    )
    
  }
  initForm(){
    this.signupForm = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      username: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^.*[~!@#$%^&*|]+.*$")]],
      passwordConfirmation: ['', [Validators.required]],
      category: ['', Validators.required]
    },
    {
      validators: [checkPassword]
    });
  }
  ngOnInit(): void {
    this.initForm();
  }
  

  
}
