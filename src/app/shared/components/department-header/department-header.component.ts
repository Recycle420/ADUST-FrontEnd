import { Component, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-department-header',
  templateUrl: './department-header.component.html',
  styleUrls: ['./department-header.component.scss']
})
export class DepartmentHeaderComponent implements OnChanges {
  @Input() departmentName!:string;
  @Input() departmentId!:number;
  @Input() currentTime!:string;
  
  sticky = false;
  innerWidth = 1000;
  menuToggle = 3;
  subMenuToggleList:string[]=[];
  targetWidth = 992;


  menuList:any=[
    {
      title: 'Home',
      link : '/department',
    },
    {
      title: 'About',
      link : '/department/department-about',
    },
    {
      title: 'Admission',
      link : '/department/department-admission',
    },
    {
      title: 'Faculties',
      inactiveLink : '/department/peoples',
      children:[
        {
          title: 'Faculty',
          link : '/department/peoples',
          param: 'faculty'
        },
        {
          title: 'Office Assistant',
          link : '/department/peoples',
          param: 'office-assistant'
        },
        {
          title: 'Lab Assistant',
          link : '/department/peoples',
          param: 'lab-assistant'
        }
      ]
    },
    {
      title: 'EVENT',
      link : '/department/news-events'
    },
    {
      title: 'NOTICE',
      link : '/department/notice'
    },
    {
      title: 'Research',
      link : '/department/research'
    },
    {
      title: 'Alumni',
      link : '/department/alumnus'
    },
    {
      title: 'Club',
      link : '/department/club'
    },
    {
      title: 'Contact',
      link : '/department/contact'
    }
  ]

  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.innerWidth = window.innerWidth;
    this.menuToggleFalse();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: number } }) {
    this.innerWidth = event.target.innerWidth;
    if (this.innerWidth < this.targetWidth) {
      this.menuToggleFalse();
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


  runMenuToggle() {
  
    if (this.menuToggle == 1) {
      this.menuToggleFalse();
    } else if (this.menuToggle == 0) {
      this.menuToggleTrue()
    }
  }

  menuToggleFalse() {
    var controller = document.getElementById('toggle-controller') as HTMLElement;
    var window = document.getElementById('toggle-window') as HTMLElement;
    controller.classList.remove('rs-menu-toggle-open');
    if (!controller.classList.contains('rs-menu-toggle-close')) {
      controller.classList.add('rs-menu-toggle-close');
    }
    if (!window.classList.contains('rs-menu-close')) {
      window.classList.add('rs-menu-close');
    }
    this.menuToggle = 0;
  }
  menuToggleTrue() {
    var controller = document.getElementById('toggle-controller') as HTMLElement;
    var window = document.getElementById('toggle-window') as HTMLElement;
    controller.classList.remove('rs-menu-toggle-close');
    controller.classList.add('rs-menu-toggle-open');
    window.classList.remove('rs-menu-close');
    this.menuToggle = 1;
  }
  showToogleIconConditionForSingle(parentName:string):any{
    if(!this.subMenuToggleList.includes(parentName) && innerWidth < this.targetWidth){
      return 1;
    }else if(this.subMenuToggleList.includes(parentName)&& innerWidth < this.targetWidth){
      return 2;
    }
    return 3;
  }
  removeSubMenuTottle(menuname:string){
    this.subMenuToggleList.splice(this.subMenuToggleList.findIndex(s=>s==menuname),1);
  }

  routeChange(){
    this.menuToggleFalse()
  }
  active(param: any) {
    let link = param.link ?? param.inactiveLink;
    if(param.title!= 'Home' && window.location.href.includes(link)){
      return 1;
    }else if(param.title == 'Home' && window.location.hash.split('/').length == 4){
      return 1;
    }
    return 0;
  }
}
