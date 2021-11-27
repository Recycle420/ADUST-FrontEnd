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

  getCoursePrograms(){
    return this.http.get(environment.apiUrl+'/CoursePrograms',this.httpOptions);
  }
  getNotices(){
    return this.http.get(environment.apiUrl+'/Notices',this.httpOptions);
  }
  getEvents(){
    return this.http.get(environment.apiUrl+'/ProgramEvents',this.httpOptions);
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
}
