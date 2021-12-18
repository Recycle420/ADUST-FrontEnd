import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  routerSubscription!: Subscription;
  eventId = 0;
  loadingEvents = 0 ;
  eventDetails:any = {};

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
    if(paramMap.params.id){
      this.eventId = paramMap.params.id;

      this.loadEventDetails();
    }
  });
  }

  loadEventDetails(){
    this.loadingEvents = 1;
    this.apiService.getEventDetails(this.eventId).subscribe((data:any)=>{
      this.eventDetails = data;
    })
  }

}
