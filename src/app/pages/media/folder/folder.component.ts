import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit, OnDestroy {

  constructor(private apiService: ApiService) { }

  routerSubscription!: Subscription;
  loadingResults = 0;
  allEventFolders: any = [];
  allNewsFolders: any = [];

  ngOnInit(): void {
    this.routerSubscription = this.apiService.getFolders().subscribe((results: any) => {
      this.allEventFolders = results.filter((x: { type: string; }) => x.type == 'event');
      this.allNewsFolders = results.filter((x: { type: string; }) => x.type == 'news');
      this.loadingResults = 1;
    })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }

}
