import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-about',
  templateUrl: './department-about.component.html',
  styleUrls: ['./department-about.component.scss']
})
export class DepartmentAboutComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department.split('-').join(' ');
        this.departmentId = paramMap.params.id;
      }
    });
  }

}
