import { DescriptionService } from './../Services/description/description.service';
import { desc } from './../Shared/Model/Details';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mentor-card',
  templateUrl: './mentor-card.component.html',
  styleUrls: ['./mentor-card.component.css']
})
export class MentorCardComponent {

  details:desc[] = [];
desc: any;

  constructor(private de:DescriptionService){ }

  ngOnInit():void{
    this.details = this.de.getAll(); //do
  }

}
