import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit, OnDestroy {
  
  loadingAlumnus = 0;
  allAlumnus:any=[];

  private subscr!: Subscription;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {
        this.loadAlumnus();
  }

  loadAlumnus(){
    this.loadingAlumnus = 1;
    this.subscr = this.apiService.getAllAlumnus().subscribe((data:any)=>{
      this.loadingAlumnus = 2;
      this.allAlumnus = data;
    })
  }

  ngOnDestroy(){
    this.subscr.unsubscribe();
  }

}
