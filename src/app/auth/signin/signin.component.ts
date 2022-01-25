import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AuthGuardService} from '../services/auth-guard.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signinForm : FormGroup = this.fb.group({ });
  submitted = false;
  signinMessage: string = '';
  authMessage: string = '';
  choices:any[]= [{content:"Patient",value:"patient"},{content:"Doctor",value:"doctor"}]
  isPatient = false;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router:Router,
              private authGuardService: AuthGuardService) { 

  }
  get email(){
    return this.signinForm.get('email');
  }
  get password(){
    return this.signinForm.get('password');
  }
  get category(){
    return this.signinForm.get('category');
  }
  onSubmit(): void {
    var email = this.email!.value;
    var password = this.password!.value;
    var category = this.category!.value;
    
    this.authService.signInUser(email,password,category).then(
      (response:any) => {
        console.log(response);
        console.log(this.authService.userId)
        this.authService.getOneUser(this.authService.userId).then(
          (response:any)=>{
            console.log( response)
            this.isPatient = response.category == 'patient' ? true : false;
            console.log(this.isPatient);
            if(this.isPatient){
              this.router.navigate(['/core']);}
             else{
            this.router.navigate(['/core/checkpatients']);
             }
          },
          (error)=> {console.log(error)}
        )
        
      },
      (error:any) => {
        console.log(error);
        this.signinMessage = error.message;
        this.router.navigate(['/auth/signin']);
      }
    );
    
  }
  initForm(){
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^.*[~!@#$%^&*|]+.*$")]],
      category:['',Validators.required]
    });
  }
  
  ngOnInit(): void {
    this.authMessage = this.authGuardService.authMessage;
    this.initForm();
  }

}
