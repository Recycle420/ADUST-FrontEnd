import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {

  constructor(private apiService: ApiService) { }

  routerSubscription!: Subscription;
  loadingResults = 0;
  allResults: any = [];

  ngOnInit(): void {
    this.routerSubscription = this.apiService.getVideos().subscribe((partners: any) => {
      this.allResults = partners;
      this.loadingResults = 1;
    })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
