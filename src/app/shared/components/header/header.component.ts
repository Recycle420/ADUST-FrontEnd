import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  coursePrograms: any = [];
  sticky = false;
  innerWidth = 1000;
  targetWidth = 992;
  menuToggle = 3;
  subMenuToggle = 0;
  subMenuToggleList:string[]=[];

  menuList:any=[
    {
      title: 'Home',
      link : '/',
    },
    {
      title: 'About',
      link : '/about',
    },
    {
      title: 'Authority',
      link : '/authority',
      children:[
        {
          title: 'Board of Trustees',
          link : '/authority/members',
          param: 'board-of-trustees'
        },
        {
          title: 'Syndicate',
          link : '/authority/members',
          param: 'syndicate'
        },
        {
          title: 'Academic Council',
          link : '/authority/members',
          param: 'academic-council'
        },
        {
          title: 'Chairman',
          link : '/authority/members',
          param: 'chairman'
        },
        {
          title: 'Vice Chancellor',
          link : '/authority/members',
          param: 'vice-chancellor'
        },
        {
          title: 'Treasurer',
          link : '/authority/members',
          param: 'treasurer'
        },
        {
          title: 'Registrar',
          link : '/authority/members',
          param: 'registrar'
        },
        {
          title: 'Controller of Examinations',
          link : '/authority/members',
          param: 'controller-of-examinations'
        },
        {
          title: 'Administration',
          link : '/authority/members',
          param: 'administration'
        }
      ]
    },
    {
      title: 'Admission',
      link : '/admission',
      children:[
        {
          title: 'Admission & Communication',
          link : '/admission-and-communication-team'
        },
        {
          title: 'Admission Eligibility & Guideline',
          link : '/admission'
        },
        {
          title: 'Admission test result',
          link : '/admission-test-result'
        },
        {
          title: 'Apply Online',
          link : '/admission-survey'
        }
      ]
    },
    {
      title: 'Academics',
      inActiveLink: '/department',
      children:[]
    },
    {
      title: 'Research',
      link : '/research-all'
    },
    {
      title: 'Alumni',
      link : '/alumni'
    },
    {
      title: 'Media',
      link : '/media',
      children: [
        {
          title: 'Photo Gallery',
          link : '/image-folder'
        },
        {
          title: 'Video Gallery',
          link : '/video-gallery'
        }
      ]
    },
    {
      title: 'Contact us',
      link : '/contact'
    }
  ]
  
  ngOnInit() {
    let menu = localStorage.getItem('menu');
    this.innerWidth = window.innerWidth;
    if (!menu || menu.length < 3) {
      this.apiService.getAcademicMenuList().subscribe((coursePrograms: any) => {
        this.coursePrograms = coursePrograms;
        localStorage.setItem('menu', JSON.stringify(coursePrograms));
      })
    } else {
      this.coursePrograms = JSON.parse(menu);
    }
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
    if (offset < 0) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

  active(param: any) {
    let link = param.link ?? param.inActiveLink;
    if(link.length > 1 && window.location.href.includes(link)){
      return 1;
    }else if(param.title == 'Home' && window.location.href.length - window.location.origin.length < 4){
      return 1;
    }
    return 0;
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

  removeSubMenuTottle(menuname:string){
    this.subMenuToggleList.splice(this.subMenuToggleList.findIndex(s=>s==menuname),1);
  }

  showToogleIconConditionForMulti(parentName:string, childName:string){
    if(this.subMenuToggleList.includes(parentName) && !this.subMenuToggleList.includes(childName)&& innerWidth < this.targetWidth){
      return 1;
    }else if(this.subMenuToggleList.includes(parentName) && this.subMenuToggleList.includes(childName)&& innerWidth < this.targetWidth){
      return 2;
    }
    return 3;
  }

  showToogleIconConditionForSingle(parentName:string):any{
    if(!this.subMenuToggleList.includes(parentName) && innerWidth < this.targetWidth){
      return 1;
    }else if(this.subMenuToggleList.includes(parentName)&& innerWidth < this.targetWidth){
      return 2;
    }
    return 3;
  }
}
