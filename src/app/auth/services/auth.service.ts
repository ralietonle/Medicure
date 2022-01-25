import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
@Injectable()
export class AuthService {
  constructor(private http: HttpClient){}
  isAuth:boolean = false; //boolean for authentication state
  isPatient:boolean = true;
  username:string="johndoe";
  name:string = "John Doe";

  token:string = "";
  userId: string = "";
  /*This is the service where authentication functons are defined */
  signUpUser(email: string, username:string, password: string, category:string){
      return new Promise( //asynchronous function
          (resolve, reject) => {
              this.http.post('http://localhost:3000/api/auth/signup',
              {email:email, password:password, username: username, category:category} ).subscribe(
                (response) => { 
                  resolve(response);
                },
                (error) => {
                  reject(error);
                }
              );}
      );
      
  }
  signInUser(email:string, password:string, category:string){
      return new Promise( //asynchronous function
          (resolve, reject) => {
              this.http.post('http://localhost:3000/api/auth/signin',
              {email:email, password:password,category:category} ).subscribe(
                (response:any) => { 
                    this.isAuth = true;
                    this.token = response.token;
                    this.userId = response.userId
                  resolve(response);
                },
                (error) => {
                  reject(error);
                }
              );}
      );
  }

  getOneUser(userId:string){
    return new Promise(
      (resolve, reject) => {
        this.http.get('http://localhost:3000/api/user/'+ userId).subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }
  
  getAllUser(){
    return new Promise(
      (resolve,reject) => {
        this.http.get('http://localhost:3000/api/user').subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }
  getAllPatient(){
    return new Promise(
      (resolve,reject) => {
        this.http.get('http://localhost:3000/api/patient').subscribe(
          (response) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        )
      }
    )
  }

  signOut() {
      this.isAuth = false;
      this.userId = "";
      this.token = "";
      
  }
}