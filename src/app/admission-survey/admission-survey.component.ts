import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-admission-survey',
  templateUrl: './admission-survey.component.html',
  styleUrls: ['./admission-survey.component.scss']
})
export class AdmissionSurveyComponent implements OnInit {

  routerSubscription!: Subscription;
  loadingAdmissions = 0;
  AdmissionDetails:any = {};

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.routerSubscription = this.route.paramMap.subscribe((admissions:any) => {
      this.loadAdmissions();
  });
  }

  loadAdmissions(){
    this.loadingAdmissions = 1;
    this.apiService.getAdmissions().subscribe((data:any)=>{
      this.loadingAdmissions = 2;
      this.AdmissionDetails = data;
    })
  }

}
