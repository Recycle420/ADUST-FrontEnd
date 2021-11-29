import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-under-development',
  templateUrl: './under-development.component.html',
  styleUrls: ['./under-development.component.scss']
})
export class UnderDevelopmentComponent implements OnInit, OnDestroy {

  constructor(private route: ActivatedRoute) {}

	routerSubscription!: Subscription;
  department!:string;
  departmentId = 0;

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = Number(paramMap.params.id);
      }
    });
  }
  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }

}
