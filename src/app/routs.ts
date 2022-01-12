import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { CreateEventsComponent } from "./events-list/create-events/create-events.component";
import { CreateSessionsComponent } from "./events-list/events-detail/create-sessions.component";
import { EventsDetailComponent } from "./events-list/events-detail/events-detail.component";
import { EventsListComponent } from "./events-list/events-list.component";
import { UpdateEventComponent } from "./update-event/update-event.component";
import { LoginComponent } from "./user/login/login.component";
import { SignupComponent } from "./user/signup/signup.component";

export const appRoutes:Routes=[
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'events-list',component: EventsListComponent},
  {path:'events-list/:id',component: EventsDetailComponent},
  {path:'create-events', component: CreateEventsComponent},
  {path:'create-sessions', component: CreateSessionsComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'update-event/:id', component: UpdateEventComponent},
  {path:'**',component: Error404Component}
]
