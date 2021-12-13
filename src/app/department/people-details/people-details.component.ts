import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  people_type = "";
  peopleId= 0;
  loadingPeopleDetails = 0;
  PeopleDetails:any = {};

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.people_type = paramMap.params.people_type;
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.departmentId;
        this.peopleId = paramMap.params.id;
        this.loadPeopleDetails(this.peopleId);
      }
    });
  }

  loadPeopleDetails(peopleId:any){
    this.loadingPeopleDetails = 1;
    this.apiService.getPeopleDetails(peopleId).subscribe((data:any)=>{
      this.loadingPeopleDetails = 2;
      this.PeopleDetails = data;
    })
  }

}
