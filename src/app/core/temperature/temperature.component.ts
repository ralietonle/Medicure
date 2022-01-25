import { Component, OnInit } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Temperature } from 'src/app/models/temperature.model';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss']
})
export class TemperatureComponent implements OnInit {
  userId:string=this.authService.userId;
  avgTemp:number= 37;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  value: number = 30;
  previousValue: number = 37.8;
  units: string = 'degrees';
  temperatures:Temperature[]=[];
  temperatureSubscription: Subscription = new Subscription();
  constructor(private temperatureService:TemperatureService,private authService:AuthService) { }

  ngOnInit(): void {
  }

  onStart():void{
    //we start the temperature code on Arduino
    this.temperatureService.startTemperatureArduino();
  }
  onStop():void{
    this.avgTemp = this.temperatureService.getTemperatureArduino(); //we take the value from arduino
    let temperature = new Temperature(this.avgTemp,new Date(),this.userId); //we save it to the database
    this.temperatureService.saveTemperature(temperature).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onCheck():void{
    this.temperatureService.getUserTemperature(this.userId)
    .then(
      (response:any) => {
        this.temperatures = response.map(
          (temperature:any) => { return new Temperature(temperature.value,temperature.date,temperature.userId)}
        )
      }
    );
    
  }
}
