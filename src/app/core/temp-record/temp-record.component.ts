import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-record',
  templateUrl: './temp-record.component.html',
  styleUrls: ['./temp-record.component.scss']
})

export class TempRecordComponent implements OnInit {
  @Input() tempValue:number = 37;
  @Input() tempDate: Date = new Date();
  //@Input() tempHour: any = {hours:12,minutes:35};
  constructor() { }

  ngOnInit(): void {
  }

}
