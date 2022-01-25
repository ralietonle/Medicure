import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Temperature } from 'src/app/models/temperature.model';

@Injectable({
  providedIn: 'root'
})

export class TemperatureService {
 
  constructor(private http: HttpClient) { }


  temperature:number = 23;
  private temperatures: Temperature[] = [];
  

  getUserTemperature(userId:string){
    return new Promise(
      (resolve, reject) => {
      this.http.get('http://localhost:3000/api/temperature/' + userId ).subscribe(
        (response) => { 
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );}
    )}  
  
  getTemperatureArduino():number{
    //When you press stop it takes the value from arduino with MQTT, give to frontend and call saveTemp
    return this.temperature;
  }
  saveTemperature(temperature:Temperature){
    //Will do a post to the database
    return new Promise(
      (resolve, reject) => {
      this.http.post('http://localhost:3000/api/temperature/',{value:temperature.value, date:temperature.date,userId: temperature.userId} ).subscribe(
        (response) => { 
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );}
    )} 
  startTemperatureArduino():void{
    //When you press start on frontend
    //We publish here with MQTT to change the value of a variable to start the arduino code
  }
}
