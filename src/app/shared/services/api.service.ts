import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  httpOptions = {
    headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }

  getCoursePrograms(images:boolean){
    return this.http.get(environment.apiUrl+'/CoursePrograms',this.httpOptions);
  }
  getNotices(departmentId?:number){
    if(departmentId){
      return this.http.get(environment.apiUrl+`/Notices/GetNoticesByDepartment/${departmentId}`,this.httpOptions);
    }else{
      return this.http.get(environment.apiUrl+'/Notices',this.httpOptions);
    }
  }
  getEvents(departmentId?:number){
    if(departmentId){
      return this.http.get(environment.apiUrl+`/ProgramEvents/GetProgramEventsByDepartment/${departmentId}`,this.httpOptions);
    }else{
      return this.http.get(environment.apiUrl+'/ProgramEvents',this.httpOptions);
    }
  }
  getEventDetails(id:number){
      return this.http.get(environment.apiUrl+`/ProgramEvents/${id}`,this.httpOptions);
  }
  getPartners(){
    return this.http.get(environment.apiUrl+'/Partners',this.httpOptions);
  }
  getTestimonials(){
    return this.http.get(environment.apiUrl+'/Testimonials',this.httpOptions);
  }
  getAdminstrators(role:string){
    return this.http.get(environment.apiUrl+`/Administrators?role=${role}`,this.httpOptions);
  }
  getAdmissionAdminstrators(){
    return this.http.get(environment.apiUrl+`/AdmissionAdministrators`,this.httpOptions);
  }
  getCarousels(departmentId:number){
    return this.http.get(environment.apiUrl+`/Carousels/${departmentId}`,this.httpOptions);
  }
  getGallery(departmentId:number){
    return this.http.get(environment.apiUrl+`/Gallerys/GetGalleryByDepartment/${departmentId}`,this.httpOptions);
  }
  getShortGallery(departmentId:number){
    return this.http.get(environment.apiUrl+`/Gallerys/GetShortGalleryByDepartment/${departmentId}`,this.httpOptions);
  }
  getAcademicMenuList(){
    return this.http.get(environment.apiUrl+'/CoursePrograms/GetAcademicMenuList',this.httpOptions);
  }
  getDepartmentNessages(departmentId:number){
    return this.http.get(environment.apiUrl+`/DepartmentMessages/GetMessagesByDepartment/${departmentId}`,this.httpOptions);
  }
  getDepartmentTestimonials(departmentId:number){
    return this.http.get(environment.apiUrl+`/Testimonials/GetTestimonialsByDepartment/${departmentId}`,this.httpOptions);
  }
  getDepartMentDetails(departmentId:number){
    return this.http.get(environment.apiUrl+`/Departments/${departmentId}`,this.httpOptions);
  }
  getDepartmentAbout(departmentId:number){
    return this.http.get(environment.apiUrl+`/DepartmentAbouts/${departmentId}`,this.httpOptions);
  }
  getDepartmentObjective(departmentId:number){
    return this.http.get(environment.apiUrl+`/DepartmentObjectives/${departmentId}`,this.httpOptions);
  }
  getPeoples(type:string,departmentId:number){
    return this.http.get(environment.apiUrl+`/Peoples/GetPeoples?type=${type}&departmentId=${departmentId}`,this.httpOptions);
  }
  getPeopleDetails(peopleId:number){
    return this.http.get(environment.apiUrl+`/Peoples/${peopleId}`,this.httpOptions);
  }
  getAdmissions(){
    return this.http.get(environment.apiUrl+'/Admissions',this.httpOptions);
  }
  getEventsByDepartments(departmentId:number){
    return this.http.get(environment.apiUrl+`/ProgramEvents/GetProgramEventsByDepartment/${departmentId}`,this.httpOptions);
  }
  getNoticesByDepartments(departmentId:number){
    return this.http.get(environment.apiUrl+`/Notices/GetNoticesByDepartment/${departmentId}`,this.httpOptions);
  }
  getDepartmentList(){
    return this.http.get(environment.apiUrl+`/Departments/GetDepartmentList`,this.httpOptions);
  }
  saveAdmissionSurvey(admissionSurveyForm:any){
    return this.http.post(environment.apiUrl+"/AdmissionSurveys",admissionSurveyForm);
  }
 saveSurveyComments(surveyCommentForm:any){
    return this.http.post(environment.apiUrl+"/SurveyComments",surveyCommentForm);
  }
  getAlumnus(departmentId:number){
    return this.http.get(environment.apiUrl+`/Alumnus/GetAlumnus?departmentId=${departmentId}`,this.httpOptions);
  }
  getAllResearch(){
    return this.http.get(environment.apiUrl+`/Researches`,this.httpOptions);
  }
  getResearch(departmentId:number){
    return this.http.get(environment.apiUrl+`/Researches/GetResearchs?departmentId=${departmentId}`,this.httpOptions);
  }
  getDepartmentClub(departmentId:number){
    return this.http.get(environment.apiUrl+`/DepartmentClubs/${departmentId}`,this.httpOptions);
  }
  getDepartmentContact(departmentId:number){
    return this.http.get(environment.apiUrl+`/DepartmentContacts/${departmentId}`,this.httpOptions);
  }

}
