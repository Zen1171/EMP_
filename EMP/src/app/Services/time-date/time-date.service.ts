import { time_date } from './../../Shared/Model/Time-Date';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimeDateService {

  constructor() { }

  getAll(): time_date[]{
    return[
      {
        startup: 'Nike',
        date: 7,
        month: 'November',
        starttime:'05:00PM',
        endtime:'06:00PM'
      },
      {
        startup: 'Whole-Foods',
        date: 11,
        month: 'November',
        starttime:'07:00PM',
        endtime:'08:00PM'
      },
      {
        startup: 'Foundermade',
        date: 17,
        month: 'November',
        starttime:'06:00PM',
        endtime:'07:00PM'
      },
      {
        startup: 'Nike',
        date: 7,
        month: 'November',
        starttime:'05:00PM',
        endtime:'06:00PM'
      },
      {
        startup: 'Whole-Foods',
        date: 11,
        month: 'November',
        starttime:'07:00PM',
        endtime:'08:00PM'
      },
      {
        startup: 'Foundermade',
        date: 17,
        month: 'November',
        starttime:'06:00PM',
        endtime:'07:00PM'
      }
    ]
  }
}
