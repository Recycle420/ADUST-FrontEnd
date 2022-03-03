import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingDepartmentClub = 0;
  departmentClub:any ={};

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;

        this.loadDepartmentClubs();
      }
    });
  }

  loadDepartmentClubs(){
    this.loadingDepartmentClub = 1;
    this.apiService.getDepartmentClub(this.departmentId).subscribe((data:any)=>{
      this.departmentClub = data;
    })
  }

}
