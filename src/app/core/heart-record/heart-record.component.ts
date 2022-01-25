import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart-record',
  templateUrl: './heart-record.component.html',
  styleUrls: ['./heart-record.component.scss']
})
export class HeartRecordComponent implements OnInit {
  @Input() hrValue:number = 60;
  @Input() hrDate: Date = new Date();
  /*@Input() hrHour: any = {hours:12,minutes:35};*/
  constructor() { }

  ngOnInit(): void {
  }

}
