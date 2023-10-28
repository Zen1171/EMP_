import { time_date } from './../Shared/Model/Time-Date';
import { Component,OnInit } from '@angular/core';
import { TimeDateService } from '../Services/time-date/time-date.service';


@Component({
  selector: 'app-confirmed-slot',
  templateUrl: './confirmed-slot.component.html',
  styleUrls: ['./confirmed-slot.component.css']
})
export class ConfirmedSlotComponent {

  timeanddate:time_date[] = [];

  constructor(private de: TimeDateService){}

  ngOnInit():void{
    this.timeanddate = this.de.getAll();
  }
}
