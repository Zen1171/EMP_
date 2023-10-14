import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { BrowseComponent } from './browse/browse.component';
import { TopicsComponent } from './topics/topics.component';
import { FeaturedMentorsComponent } from './featured-mentors/featured-mentors.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { MentorCardComponent } from './mentor-card/mentor-card.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BrowseComponent,
    TopicsComponent,
    FeaturedMentorsComponent,
    FooterComponent,
    ProfileCardComponent,
    MentorCardComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
