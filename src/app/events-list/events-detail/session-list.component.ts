import { Component, Input, OnChanges} from "@angular/core";
import { ISessions } from "src/app/shared/event-model";


@Component({
  selector:'session-list',
  templateUrl:'./session-list.component.html'

})

export class SessionListComponent implements OnChanges{

  @Input() sessions!:ISessions[]
  @Input() filterBy!:string
visibleSessions:ISessions[]=[]
  ngOnChanges(){
    if(this.sessions){
      this.filterSessions(this.filterBy)
    }
  }
filterSessions(filter: any){
  if(filter === 'all'){
this.visibleSessions = this.sessions.slice(0);
  }else{
this.visibleSessions = this.sessions.filter(session =>{
  return session.level.toLocaleLowerCase() === filter
})
  }
}
}



