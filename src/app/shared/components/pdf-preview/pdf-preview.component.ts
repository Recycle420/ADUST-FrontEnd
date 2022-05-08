import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.scss']
})
export class PdfPreviewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private utilityService: UtilityService) { }
  pdfSrc: any;
  

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

    this.pdfSrc = this.utilityService.getSelectedPdf();
    console.log(this.pdfSrc);
  }

  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }

  downloadSelectedPdf() {
    const linkSource = this.pdfSrc;
    const downloadLink = document.createElement("a");
    downloadLink.href = linkSource;
    downloadLink.download = 'adust-notice';
    downloadLink.click();
  }

}
