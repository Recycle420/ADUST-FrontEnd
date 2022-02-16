import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss']
})
export class ResearchComponent implements OnInit {

  routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingResearch = 0;
  allResearch:any=[];

  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;
        this.loadResearch();
      }
    });
  }

  loadResearch(){
    this.loadingResearch = 1;
    this.apiService.getResearch(this.departmentId).subscribe((data:any)=>{
      this.loadingResearch = 2;
      this.allResearch = data;
    })
  }

  downloadPdf(base64String:string, fileName:string) {
    const linkSource = `data:application/pdf;base64,${base64String}`;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
  }
}
