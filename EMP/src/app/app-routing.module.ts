import { SlotComponent } from './slot/slot.component';
import { MentorCardComponent } from './mentor-card/mentor-card.component';
import { TopicsComponent } from './topics/topics.component';
import { BrowseComponent } from './browse/browse.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'', component:BrowseComponent},
  {path:'', component:TopicsComponent},
  {path: 'profile-card', component: ProfileCardComponent},
  {path:'mentor-card', component: MentorCardComponent},
  {path:'slot', component: SlotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
