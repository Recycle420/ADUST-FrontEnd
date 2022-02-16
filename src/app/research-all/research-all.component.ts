import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-research-all',
  templateUrl: './research-all.component.html',
  styleUrls: ['./research-all.component.scss']
})
export class ResearchAllComponent implements OnInit {

  loadingResearch = 0;
  allResearch:any=[];

  constructor(private apiService:ApiService) {}

  ngOnInit(): void {
        this.loadResearch();
  }

  loadResearch(){
    this.loadingResearch = 1;
    this.apiService.getAllResearch().subscribe((data:any)=>{
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
