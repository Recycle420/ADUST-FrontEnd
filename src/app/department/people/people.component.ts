import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingPeoples = 0;
  people_type = "";
  allPeoples:any=[];

  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department.split('-').join(' ');
        this.departmentId = paramMap.params.id;
        this.people_type = paramMap.params.people_type;
        this.loadPeoples();
      }
    });
  }

  loadPeoples(){
    this.loadingPeoples = 1;
    this.apiService.getPeoples(this.people_type,this.departmentId).subscribe((data:any)=>{
      this.loadingPeoples = 2;
      this.allPeoples = data;
    })
  }

}
