import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.scss']
})

export class NoticesComponent implements OnInit {
  allNotices: any;
  loadingNotices = 0;
  @Input() departmentId!: number;
  @Input() loadAll = false;

  constructor(private apiService: ApiService, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.loadingNotices = 1;
    if (!this.loadAll) {
      this.apiService.getNotices(this.departmentId).subscribe((notices: any) => {
        this.allNotices = notices.map((notice: any) => {
          return {
            ...notice, description: notices.description ? notices.description : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date: this.utilityService.getFormateDate(notice.noticeDate)
          }
        })
        this.loadingNotices = 2;
      })
    } else {
      this.apiService.getNoticesByDepartments(this.departmentId).subscribe((notices: any) => {
        this.allNotices = notices.map((notice: any) => {
          return {
            ...notice, description: notices.description ? notices.description : "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            date: this.utilityService.getFormateDate(notice.noticeDate)
          }
        })
        this.loadingNotices = 2;
      })
    }
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
