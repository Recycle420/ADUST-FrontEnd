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
  getPartners(){
    return this.http.get(environment.apiUrl+'/Partners',this.httpOptions);
  }
  getTestimonials(){
    return this.http.get(environment.apiUrl+'/Testimonials',this.httpOptions);
  }
  getAdminstrators(role:string){
    return this.http.get(environment.apiUrl+`/Administrators?role=${role}`,this.httpOptions);
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
  getPeoples(type:string,departmentId:number){
    return this.http.get(environment.apiUrl+`/Peoples/GetPeoples?type=${type}&departmentId=${departmentId}`,this.httpOptions);
  }
  getAdmissions(){
    return this.http.get(environment.apiUrl+'/Admissions',this.httpOptions);
  }

}
