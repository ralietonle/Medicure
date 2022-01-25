import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Bpm } from 'src/app/models/bpm.model';
import { HeartrateService } from '../services/heartrate.service';

@Component({
  selector: 'app-heart-rate',
  templateUrl: './heart-rate.component.html',
  styleUrls: ['./heart-rate.component.scss']
})
export class HeartRateComponent implements OnInit {
  userId = this.authService.userId;
  i = 0;
  bpms: Bpm[] = [];
  heartRate:number = 60;
  multi: any[] = [];
  view: any[] = [700, 300];
  // options
  legend: boolean = false;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };

  constructor(private bpmService:HeartrateService, private authService:AuthService) {
    this.multi = this.bpmService.multi;
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  onStart():void{
    //we start the temperature code on Arduino
    this.bpmService.startBpmArduino();
  }
  onStop():void{
    this.heartRate = this.bpmService.getBpmArduino(); //we take the value from arduino
    let bpm = new Bpm(this.heartRate,new Date(),this.userId); //we save it to the database
    this.bpmService.saveTemperature(bpm).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onCheck():void{
    this.bpmService.getUserBpm(this.userId)
    .then(
      (response:any) => {
        this.bpms = response.map(
          (temperature:any) => { return new Bpm(temperature.value,temperature.date,temperature.userId)}
        )
      }
    );
    
  }

  ngOnInit(): void {
   
  }

}
