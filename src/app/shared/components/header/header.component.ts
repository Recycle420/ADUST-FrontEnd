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
    this.apiService.getAcademicMenuList().subscribe((coursePrograms: any) => {
      this.coursePrograms = coursePrograms;
    })

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

}
