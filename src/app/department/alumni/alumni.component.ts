import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingAlumnus = 0;
  allAlumnus:any=[];

  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;
        this.loadAlumnus();
      }
    });
  }

  loadAlumnus(){
    this.loadingAlumnus = 1;
    this.apiService.getAlumnus(this.departmentId).subscribe((data:any)=>{
      this.loadingAlumnus = 2;
      this.allAlumnus = data;
    })
  }

}
