import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-dept-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})

export class EventsComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingEvents = 0 ;
  allEvents:any = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, private utilityService : UtilityService) { }
  
  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;
      }
      this.loadEvents();
    });
  }

  ngOnDestroy(): void {
      this.routerSubscription.unsubscribe();
  }

  loadEvents()
  {
    this.loadingEvents = 1
    this.apiService.getEventsByDepartments(this.departmentId).subscribe((programevents: any) => {
      this.allEvents = programevents.map((programevent: any) => {
        return {...programevent, date: this.utilityService.getFormateDate(programevent.eventDate) }
      })
      this.loadingEvents = 2;
    })
    }
}
