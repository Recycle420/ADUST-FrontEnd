import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-department-about',
  templateUrl: './department-about.component.html',
  styleUrls: ['./department-about.component.scss']
})
export class DepartmentAboutComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingDepartmentHistory = 0;
  loadingDepartmentAbout = 0;
  departmentHistory:any ={};
  departmentAbout:any ={};

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;

        this.loadDepartmentDetails();
        this.loadDepartmentAbouts();
      }
    });
  }

  loadDepartmentDetails(){
    this.loadingDepartmentHistory = 1;
    this.apiService.getDepartMentDetails(this.departmentId).subscribe((data:any)=>{
      this.departmentHistory = data;
    })
  }

  loadDepartmentAbouts(){
    this.loadingDepartmentAbout = 1;
    this.apiService.getDepartmentAbout(this.departmentId).subscribe((data:any)=>{
      this.departmentAbout = data;
    })
  }

}
