import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-dept-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;

  constructor(private apiService: ApiService, private route: ActivatedRoute,) { }
  
  
  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department.split('-').join(' ');
        this.departmentId = paramMap.params.id;
      }
    });
  }
  ngOnDestroy(): void {
      this.routerSubscription.unsubscribe();
  }

}
