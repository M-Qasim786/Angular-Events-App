import { Component, OnInit } from '@angular/core';
import { IEvent } from '../shared/event-model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {
  events!:IEvent[];

  constructor(private eventService: EventService,
    ) { }

  ngOnInit(): void {
this.getEvents()
  }



getEvents(){
  this.eventService.getEvents().subscribe(
    (events: any) => this.events=events
  )
}

deleteEvent(event:any){
  this.eventService.deleteEvent(event.id).subscribe(
    result =>{
      console.log('Delte data', result);
      alert("Are you sure you want to delete!")
      this.getEvents()
    }

  )
}
}


