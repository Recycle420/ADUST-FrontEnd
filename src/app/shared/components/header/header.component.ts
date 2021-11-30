import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(private apiService: ApiService) { }
  coursePrograms:any =[];
  sticky = false;
  
  ngOnInit(){
    let menu = localStorage.getItem('menu');
    if(!menu || menu.length < 3){
      this.apiService.getAcademicMenuList().subscribe((coursePrograms: any) => {
        this.coursePrograms = coursePrograms;
        localStorage.setItem('menu',JSON.stringify(coursePrograms));
      })
    }else{
      this.coursePrograms = JSON.parse(menu);
    }
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const configuratorContainer = document.getElementById('rs-header') as HTMLElement;
    let offset = configuratorContainer.getBoundingClientRect().bottom;
    if(offset < 0){
      this.sticky = true;
    }else{
      this.sticky = false;
    }
  }
  active(param:string){
    return window.location.href.includes(param);
  }
  activeHome(){
    return window.location.href.length - window.location.origin.length < 4;
  }
}
