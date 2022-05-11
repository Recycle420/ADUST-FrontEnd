import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { UtilityService } from '../shared/services/utility.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  allCareers: any;
  loadingCareers = 0;

  constructor(private apiService: ApiService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.loadingCareers = 1;
    this.apiService.getCareers().subscribe((results: any) => {
      this.allCareers = results;
      this.loadingCareers = 2;
    })
  }

  viewSelectedPdf(base64String: string, fileName: string) {
    const linkSource = `data:application/pdf;base64,${base64String}`;
    this.utilityService.setSelectedPdf(linkSource);
  }

  downloadSelectedPdf(base64String: string, fileName: string) {
    const linkSource = `data:application/pdf;base64,${base64String}`;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  }

}
