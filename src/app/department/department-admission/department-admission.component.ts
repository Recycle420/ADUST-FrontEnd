import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-department-admission',
  templateUrl: './department-admission.component.html',
  styleUrls: ['./department-admission.component.scss']
})
export class DepartmentAdmissionComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingAdmissions = 0;
  AdmissionDetails:any = {};

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;
        this.loadAdmissions();
      }
    });
  }

  loadAdmissions(){
    this.loadingAdmissions = 1;
    this.apiService.getAdmissions().subscribe((data:any)=>{
      this.loadingAdmissions = 2;
      this.AdmissionDetails = data;
    })
  }

}
