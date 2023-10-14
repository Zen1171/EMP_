import { DescriptionService } from './../Services/description/description.service';
import { Component } from '@angular/core';
import { desc } from '../Shared/Model/Details';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {

  details:desc[] = [];

  constructor(private de:DescriptionService){ }

  ngOnInit():void{
    this.details = this.de.getAll(); //do
  }

}
