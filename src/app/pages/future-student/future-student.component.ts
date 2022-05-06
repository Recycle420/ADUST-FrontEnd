import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-future-student',
  templateUrl: './future-student.component.html',
  styleUrls: ['./future-student.component.scss']
})
export class FutureStudentComponent implements OnInit {

  private subscr!: Subscription;
  loadingResult = 0;
  result: any = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadResults();
  }

  loadResults() {
    this.subscr = this.apiService.getFutureStudent().subscribe((data: any) => {
      this.result = data;
      this.loadingResult = 1;
    })
  }

  ngOnDestroy(){
    this.subscr.unsubscribe();
  }

}
