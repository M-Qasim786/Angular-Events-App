import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from 'src/app/shared/event-model';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'events-app-events-detail',
  templateUrl: './events-detail.component.html',
})
export class EventsDetailComponent implements OnInit {
  event: any;
  filterBy: string = 'all';
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.eventService
      .getEventsDetail(+this.route.snapshot.params['id'])
      .subscribe((result) => (this.event = result));
  }
}
