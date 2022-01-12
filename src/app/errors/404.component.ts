import { Component } from "@angular/core";

@Component({
  template:`
 <div class="error-message">
 <h1 class="message"> Error 404'd</h1>
 </div>

  `,
  styles:[
    `
    .error-message{
      display:flex;
  text-align:center;
  justify-content:center;
  align-items:center;
  height:80vh  ;

    }
    .message{
      font-size:100px
    }
    `
  ]
})


export class Error404Component{
  constructor(){}
}
