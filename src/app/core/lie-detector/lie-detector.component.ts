import { Component, OnInit } from '@angular/core';
import { HeartrateService} from '../services/heartrate.service';
import { TemperatureService} from '../services/temperature.service';

@Component({
  selector: 'app-lie-detector',
  templateUrl: './lie-detector.component.html',
  styleUrls: ['./lie-detector.component.scss']
})
export class LieDetectorComponent implements OnInit {
  avgTemp:number= 0;
  heartRate: number = 0;
  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  
  units: string = 'degrees';
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


  constructor(private bpmService:HeartrateService, private temperatureService:TemperatureService) {
   this.multi = [];
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

  onStartTemperature(){
    this.temperatureService.startTemperatureArduino();
  }
  onStopTemperature(){
    this.avgTemp = this.temperatureService.getTemperatureArduino(); //we take the value from arduino
  }
  onStartBpm(){
    this.bpmService.startBpmArduino();
  }
  onStopBpm(){
    this.heartRate = this.bpmService.getBpmArduino(); //we take the value from arduino
  }
  ngOnInit(): void {
  }

}
