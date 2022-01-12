import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISessions } from 'src/app/shared/event-model';

@Component({
  templateUrl: './create-sessions.component.html',
  styles:[
    `

    em {
        float: right;
        color: #e05c65;
        padding-left: 10px;
      }
      .error input {
        background-color: #e3c3c5;
      }
      .error textarea {
        background-color: #e3c3c5;
      }
      .error {
        color: #999;
      }

    `
  ]
})
export class CreateSessionsComponent implements OnInit {
  newSessionsForm!: FormGroup;
  name!: FormControl;
  presenter!: FormControl;
duration!: FormControl;
  level!: FormControl;
  abstract!: FormControl;
  voters!: FormControl;

  constructor() {}

  ngOnInit() {
    this.name = new FormControl('',Validators.required);
    this.presenter = new FormControl('',Validators.required);
    this.duration = new FormControl('',Validators.required);
    this.level = new FormControl('',Validators.required);
    this.abstract = new FormControl('',Validators.required);
    this.voters = new FormControl('',[Validators.required,Validators.maxLength(300)]);

    this.newSessionsForm = new FormGroup({
      name: this.name,
      presenter:this.presenter,
      duration:this.duration,
      level:this.level,
      abstract:this.abstract,
      voters:this.voters
    });
  }

  saveSessions(formValues: any){
let session: ISessions = {
 id:1,
 name:formValues.name,
 presenter:formValues.presenter,
 duration: +formValues.duration,
 level:formValues.level,
 abstract:formValues.abstract,
 voters:[]
}
console.log(session)
  }
}
