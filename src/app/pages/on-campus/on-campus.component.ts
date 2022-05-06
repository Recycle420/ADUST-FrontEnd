import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-on-campus',
  templateUrl: './on-campus.component.html',
  styleUrls: ['./on-campus.component.scss']
})
export class OnCampusComponent implements OnInit {

  private subscr!: Subscription;
  loadingResult = 0;
  result: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadResults();
  }

  loadResults() {
    this.subscr = this.apiService.getOnCampusInfo().subscribe((data: any) => {
      this.result = data;
      this.loadingResult = 1;
    })
  }

  ngOnDestroy(){
    this.subscr.unsubscribe();
  }

}
