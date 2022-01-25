import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bpm } from 'src/app/models/bpm.model';
import { HeartrateService } from '../services/heartrate.service';
@Component({
  selector: 'app-check-heartrate',
  templateUrl: './check-heartrate.component.html',
  styleUrls: ['./check-heartrate.component.scss']
})
export class CheckHeartrateComponent implements OnInit {

  constructor(private route: ActivatedRoute, private bpmService:HeartrateService, private router: Router) { }
  id:string = "";
  bpms: Bpm[] = [];
  ngOnInit(): void {
    this.id = this.route?.parent?.snapshot.params['id'];
    this.bpmService.getUserBpm(this.id).then(
      (response:any) => {
        this.bpms = response.map(
          (bpm:any) => { return new Bpm(bpm.value,bpm.date,bpm.userId)}
        )
      },
      (error)=>{
        console.log(error);
      }

    )
    
  }

}
