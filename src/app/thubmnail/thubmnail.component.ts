import { Component, Input, OnInit } from '@angular/core';
import { IEvent } from '../shared/event-model';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-app-thubmnail',
  templateUrl: './thubmnail.component.html',
  styles:[
    `
    .green{color:#003300 !important}
    .bold{font-weight:bold !important}


    `
  ]
})
export class ThubmnailComponent implements OnInit {
  collection:any
  eventData:any
  constructor(private eventService: EventService) { }
@Input() event!:IEvent
  ngOnInit(): void {

  }

  getStartTimeClass(){
    if(this.event && this.event?.time === '8:00 am')
    return 'green bold'
    return ''

  }


  }

