import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Bpm } from 'src/app/models/bpm.model';

@Injectable({
  providedIn: 'root'
})
export class HeartrateService {

  constructor(private http: HttpClient) { }

   multi = [
    {
      "name": "Germany",
      "series": [
        {
          "name": "1990",
          "value": 62000000
        },
        {
          "name": "2010",
          "value": 73000000
        },
        {
          "name": "2011",
          "value": 89400000
        }
      ]
    }
  ];
  heartrate:number = 70.5;
  private heartrates: Bpm[] = [];
  

  getBpmArduino():number{
    //When you press stop it takes the value from arduino with MQTT, give to frontend and call saveTemp
    return this.heartrate;
  }
  getUserBpm(userId:string){
    return new Promise(
      (resolve, reject) => {
      this.http.get('http://localhost:3000/api/bpm/' + userId ).subscribe(
        (response) => { 
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );}
    )}  
  
  getHeartrateArduino():number{
    //When you press stop it takes the value from arduino with MQTT, give to frontend and call saveTemp
    return this.heartrate;
  }
  saveTemperature(bpm:Bpm){
    //Will do a post to the database
    return new Promise(
      (resolve, reject) => {
      this.http.post('http://localhost:3000/api/bpm/',{value:bpm.value, date:bpm.date,userId: bpm.userId} ).subscribe(
        (response) => { 
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );}
    )} 
  startBpmArduino():void{
    //When you press start on frontend
    //We publish here with MQTT to change the value of a variable to start the arduino code
   
  }
  
}
