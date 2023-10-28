import { Component } from '@angular/core';

@Component({
  selector: 'app-add-slot',
  templateUrl: './add-slot.component.html',
  styleUrls: ['./add-slot.component.css']
})
export class AddSlotComponent {

  array = [
    {
      'id': '1',
      'name': '26'
    },
    {
      'id': '2',
      'name': '27'
    },
    {
      'id': '3',
      'name': '28'
    },
    {
      'id': '4',
      'name': '29'
    },
    {
      'id': '5',
      'name': '30'
    },
    {
      'id': '6',
      'name': '31'
    },
    {
      'id': '7',
      'name': '32'
    }
  ]

  array2 = [
      {
        'id': '1',
        'name': '26'
      },
      {
        'id': '3',
        'name': '28'
      },
      {
        'id': '5',
        'name': '30'
      }
  ]

  isInArray2(id: string): boolean {
    console.log(this.array2.some(item => item.id === id))
    return this.array2.some(item => item.id === id);
  }

}
