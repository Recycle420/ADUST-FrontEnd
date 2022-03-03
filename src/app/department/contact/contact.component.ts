import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingDepartmentContact = 0;
  departmentContact:any ={};

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;

        this.loadDepartmentContact();
      }
    });
  }

  loadDepartmentContact(){
    this.loadingDepartmentContact = 1;
    this.apiService.getDepartmentContact(this.departmentId).subscribe((data:any)=>{
      this.departmentContact = data;
    })
  }

}
