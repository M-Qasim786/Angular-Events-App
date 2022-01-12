import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from '../shared/event.service';

@Component({
  selector: 'events-app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css'],
})
export class UpdateEventComponent implements OnInit {
  updateForm!: FormGroup;
  event: any;
  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      name: [''],
      date: [''],
      time: [''],
      price: [''],
      address: [''],
      city: [''],
      country: [''],
      onlineUrl: [''],
    });
    this.updateCurrentEventData();
  }

  updateCurrentEventData() {
    this.eventService
      .updateCurrentEvent(this.route.snapshot.params.id)
      .subscribe({
        next: (result) => {
          console.log(result);
          this.updateForm = this.fb.group({
            name: [result.name],
            date: [result.date],
            time: [result.time],
            price: [result.price],
            address: [result.address],
            city: [result.city],
            country: [result.country],
            onlineUrl: [result.onlineUrl],
          });
        },
        error: (err) => {
          console.log('error', err);
        },
      });
  }
  updateData(formValue: any) {
    this.eventService
      .updateCurrentData(this.route.snapshot.params.id, formValue)
      .subscribe({
        next: (result) => {
          console.log(result);
          this.toastr.success('Event update successfully');
          this.router.navigate(['/events-list']);
        },
        error: (err) => {
          console.log('error', err);
        },
      });
  }
  cancel() {
    this.router.navigate(['/events-list']);
  }
}
