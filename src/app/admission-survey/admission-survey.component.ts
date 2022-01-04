import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-admission-survey',
  templateUrl: './admission-survey.component.html',
  styleUrls: ['./admission-survey.component.scss']
})
export class AdmissionSurveyComponent implements OnInit {

  loadingAdmissions = 0;
  AdmissionDetails:any = {};
  loadingDepartmentlist =0;
  departmentList:any =[];

  admissionSurveyForm={
    departmentId: 0,
    name : '',
    phoneNumber : '',
    sscResult : '',
    hscResult: '',
    sscPassingYear: '',
    hscPassingYear: '',
    district: '',
    email: ''
  }

  initialSurveyForm={
    departmentId: 0,
    name : '',
    phoneNumber : '',
    sscResult : '',
    hscResult: '',
    sscPassingYear: '',
    hscPassingYear: '',
    district: '',
    email: ''
  }
  incompleteForm = false;
  showSubmitted = false;

  constructor(private route: ActivatedRoute, private apiService:ApiService) { }

  ngOnInit(): void {
    this.admissionSurveyForm = {...this.initialSurveyForm};
    this.loadAdmissions();
    this.loadDepartmentList();
  }

  loadAdmissions(){
    this.loadingAdmissions = 1;
    this.apiService.getAdmissions().subscribe((data:any)=>{
      this.loadingAdmissions = 2;
      this.AdmissionDetails = data;
    })
  }
  loadDepartmentList(){
    this.loadingDepartmentlist = 1;
    this.apiService.getDepartmentList().subscribe((data:any)=>{
      this.loadingDepartmentlist = 2;
      this.departmentList = data;
    })
  }
  saveSurveyForm(){
    if(this.admissionSurveyForm.departmentId == 0||
      this.admissionSurveyForm.name.length ==0 || 
      (isNaN(Number(this.admissionSurveyForm.phoneNumber))|| this.admissionSurveyForm.phoneNumber.length ==0)||
      (isNaN(Number(this.admissionSurveyForm.sscResult))|| this.admissionSurveyForm.sscResult.length ==0)||
      (isNaN(Number(this.admissionSurveyForm.hscResult))|| this.admissionSurveyForm.hscResult.length ==0)||
      (isNaN(Number(this.admissionSurveyForm.sscPassingYear))|| this.admissionSurveyForm.sscPassingYear.length ==0)||
      (isNaN(Number(this.admissionSurveyForm.hscPassingYear))|| this.admissionSurveyForm.hscPassingYear.length ==0)||
      this.admissionSurveyForm.district.length == 0||
      this.admissionSurveyForm.email.length == 0
     ){
      this.incompleteForm = true;
    }else{
      this.incompleteForm = false;
      let formData:any={};
      formData = {...this.admissionSurveyForm,hscResult: Number(this.admissionSurveyForm.hscResult), sscResult: Number(this.admissionSurveyForm.sscResult), sscPassingYear: Number(this.admissionSurveyForm.sscPassingYear), hscPassingYear: Number(this.admissionSurveyForm.hscPassingYear) }
      this.apiService.saveAdmissionSurvey(formData).subscribe((data)=>{
        this.showSubmitted =  true;
        this.admissionSurveyForm = {...this.initialSurveyForm};
        setTimeout(()=>{
          this.showSubmitted =  false;
        },5000)
      })
    }
  }

}
