import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-header',
  templateUrl: './department-header.component.html',
  styleUrls: ['./department-header.component.scss']
})
export class DepartmentHeaderComponent implements OnInit {
  @Input() departmentName!:string;
  @Input() departmentId!:number;
  
  sticky = false;
  
  constructor() { }

  ngOnInit(): void {
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

  activateHome(){
    return window.location.hash.split('/').length == 4;
  }
  

}
