import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit, OnDestroy {

  routerSubscription!: Subscription;
  folderId = 0;
  folderName: string = "still on dev";
  loadingResults = 0;
  allResults: any = {};

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((paramMap: any) => {
      this.folderId = paramMap.params.id;
      this.folderName = paramMap.params.name;
      this.loadResults(this.folderId);
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

  loadResults(folderId: any) {
    this.apiService.getImages(folderId).subscribe((data: any) => {
      this.allResults = data;
      this.loadingResults = 1;
    })
  }

}
