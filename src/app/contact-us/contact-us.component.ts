import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  commentSurveyForm={
    name : '',
    phoneNumber : '',
    email: '',
    subject: '',
    comments: ''
  }

  initialCommentSurveyForm={
    name : '',
    phoneNumber : '',
    email: '',
    subject: '',
    comments: ''
  }

  incompleteForm = false;
  showSubmitted = false;

  constructor(private apiService:ApiService) { }
  ngOnInit(): void {
    this.commentSurveyForm = {...this.initialCommentSurveyForm};
  }
  saveCommentSurvey(){
    if(
      this.commentSurveyForm.name.length ==0 || 
      (isNaN(Number(this.commentSurveyForm.phoneNumber))|| this.commentSurveyForm.phoneNumber.length ==0)||
      this.commentSurveyForm.comments.length == 0||
      this.commentSurveyForm.subject.length == 0||
      this.commentSurveyForm.email.length == 0
     ){
      this.incompleteForm = true;
    }else{
      this.incompleteForm = false;
      this.apiService.saveSurveyComments(this.commentSurveyForm).subscribe((data:any)=>{
        this.showSubmitted =  true;
        this.commentSurveyForm = {...this.initialCommentSurveyForm};
        setTimeout(()=>{
          this.showSubmitted =  false;
        },5000)
      })
    }
  }
}
