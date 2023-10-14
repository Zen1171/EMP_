import { ProfileCardComponent } from './profile-card/profile-card.component';
import { FeaturedMentorsComponent } from './featured-mentors/featured-mentors.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'featured-mentors', component: FeaturedMentorsComponent},
  {path: 'profile-card', component: ProfileCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
