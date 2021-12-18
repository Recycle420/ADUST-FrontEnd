import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-program-objective',
  templateUrl: './program-objective.component.html',
  styleUrls: ['./program-objective.component.scss']
})
export class ProgramObjectiveComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingObjective = 0;
  departmentObjective:any ={};

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;

        this.loadDepartmentObjective();
      }
    });
  }

  loadDepartmentObjective(){
    this.loadingObjective = 1;
    this.apiService.getDepartmentObjective(this.departmentId).subscribe((data:any)=>{
      this.departmentObjective = data;
    })
  }

}
