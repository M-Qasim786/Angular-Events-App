import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'events-app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.css'],
})
export class CreateEventsComponent implements OnInit {
  event: any;
  eventForm!: FormGroup;
  private name!: FormControl;
  private date!: FormControl;
  private time!: FormControl;
  private price!: FormControl;
  private address!: FormControl;
  private city!: FormControl;
  private country!: FormControl;
  private onlineUrl!: FormControl;
  private imageUrl!: FormControl;
  constructor(private router: Router, private eventService: EventService) {}
  ngOnInit(): void {
    this.name = new FormControl();
    this.date = new FormControl();
    this.time = new FormControl();
    this.price = new FormControl();
    this.address = new FormControl();
    this.city = new FormControl();
    this.country = new FormControl();
    this.onlineUrl = new FormControl();
    this.imageUrl = new FormControl();
    this.eventForm = new FormGroup({
      name: this.name,
      date: this.date,
      time: this.time,
      price: this.price,
      address: this.address,
      city: this.city,
      country: this.country,
      onlineUrl: this.onlineUrl,
      imageUrl: this.imageUrl,
    });

  }

  validateName() {
    return this.name.valid || this.name.untouched;
  }
  validateDate() {
    return this.date.valid || this.date.untouched;
  }
  validateTime() {
    return this.time.valid || this.time.untouched;
  }
  validatePrice() {
    return this.price.valid || this.price.untouched;
  }
  saveEvent(formValues: any) {
    this.eventService.postSaveEvent(formValues).subscribe(
      result =>{
        console.log(result);
        this.router.navigate(['/events-list']);
      }
    )

  }

  cancel(): void {
    this.router.navigate(['/events-list']);
  }
}
