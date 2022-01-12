import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { EventsListComponent } from './events-list/events-list.component';
import { ThubmnailComponent } from './thubmnail/thubmnail.component';
import { EventsDetailComponent } from './events-list/events-detail/events-detail.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routs';
import { CreateEventsComponent } from './events-list/create-events/create-events.component';
import { Error404Component } from './errors/404.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateSessionsComponent } from './events-list/events-detail/create-sessions.component';
import { SessionListComponent } from './events-list/events-detail/session-list.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component'
import { ToastrModule } from 'ngx-toastr';
import { UpdateEventComponent } from './update-event/update-event.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EventsListComponent,
    ThubmnailComponent,
    EventsDetailComponent,
    CreateEventsComponent,
    Error404Component,
    CreateSessionsComponent,
    SessionListComponent,
    LoginComponent,
    SignupComponent,
    UpdateEventComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
      preventDuplicates:true,
    })
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

