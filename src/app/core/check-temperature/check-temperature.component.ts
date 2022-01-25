import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Temperature } from 'src/app/models/temperature.model';
import { TemperatureService } from '../services/temperature.service';

@Component({
  selector: 'app-check-temperature',
  templateUrl: './check-temperature.component.html',
  styleUrls: ['./check-temperature.component.scss']
})
export class CheckTemperatureComponent implements OnInit {

  constructor(private route: ActivatedRoute, private temperatureService:TemperatureService, private router: Router) { }
  id:string = "";
  temperatures: Temperature[] = [];
  ngOnInit(): void {
    this.id = this.route?.parent?.snapshot.params['id'];
    this.temperatureService.getUserTemperature(this.id).then(
      (response:any) => {
        this.temperatures = response.map(
          (temperature:any) => { return new Temperature(temperature.value,temperature.date,temperature.userId)}
        )
        console.log(this.temperatures);
      },
      (error)=>{
        console.log(error);
      }

    )
    
  }
  

}
