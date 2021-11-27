import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  loadingEvents = 0 ;
  allEvents:any = [];

  constructor(private apiService: ApiService, private utilityService : UtilityService) { }

  ngOnInit(): void {
    this.loadingEvents = 1
    this.apiService.getEvents().subscribe((programevents: any) => {
      this.allEvents = programevents.map((programevent: any) =>{
        return {...programevent, date: this.utilityService.getFormateDate(programevent.eventDate) }
      })
      this.loadingEvents = 2;
    })
  }



}
