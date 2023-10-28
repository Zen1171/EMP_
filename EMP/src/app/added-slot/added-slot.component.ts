import { time_date } from './../Shared/Model/Time-Date';
import { Component,OnInit } from '@angular/core';
import { TimeDateService } from '../Services/time-date/time-date.service';

@Component({
  selector: 'app-added-slot',
  templateUrl: './added-slot.component.html',
  styleUrls: ['./added-slot.component.css']
})
export class AddedSlotComponent {

  timeanddate:time_date[] = [];

  constructor(private de: TimeDateService){}

  ngOnInit():void{
    this.timeanddate = this.de.getAll();
  }

}
