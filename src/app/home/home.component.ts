import { Component, HostListener, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from '../shared/services/api.service'; 


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  hide = false;
  animteachers = 0;
  animcourses = 0;
  animSatisfiedClients = 0;
  animStudents = 0;

  totalTeachers = 60;
  totalCourses = 50;
  totalStudents = 900;
  totalSatisfiedClients = 3675;
  selectedCourse:any = {};

  customOptionsStudents: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: false,
    navText: ['', ''],
    autoplay: true,
    nav: true,
    items: 3,
    rewind: true,
    margin: 30,
    autoplayTimeout: 5000,
    smartSpeed: 1200,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false
      },
      768: {
        items: 2 ,
        nav: true ,
        dots: false 
      },
      992: {
        items: 3 ,
        nav: true ,
        dots: false 
      }
    }
    
  }

  customOptionsHome: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: false,
  
    autoplay: true,
    nav: true,
    items: 1,
    rewind: true,
    autoplayTimeout: 8000,
    smartSpeed: 500,
    autoWidth: true,  
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: false
      },
      768: {
        items: 1 ,
        nav: true ,
        dots: false 
      },
      992: {
        items: 1 ,
        nav: true ,
        dots: false 
      }
    }
    
  }

  customOptionsTopManage: OwlOptions = {
     
    loop:  true ,
    items: 2,
    lazyLoad: true,
    margin: 30,
    autoplay:  true ,
    autoplayTimeout:  5000,
    smartSpeed: 1200,
    dots: true,
    nav:  true ,
    autoWidth: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    navSpeed:  false,
    responsive: {
      0: {
        items:  1,
        nav: true ,
        dots: true 
      },
      768: {
        items: 2 ,
        nav: true ,
        dots: true 
      },
      992: {
        items: 2 ,
        nav: true ,
        dots: true
      }
    }

  }
  customOptionsPartners: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: true,
    dots: false,
    navSpeed: false,
    navText: ['', ''],
    autoplay: true,
    nav: false,
    items: 5,
    rewind: true,
    margin: 80,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        dots: false
      },
      768: {
        items: 4,
        nav: true ,
        dots: false 
      },
      992: {
        items: 5,
        nav: false,
        dots: false 
      }
    }
    
  }

  coursePrograms:any=[];

  allDepartments:any=[];



  mainSlider=[
    {
     title: 'Quality Education | Affordable Cost',
     source: 'assets/images/slider/Slider-1.jpg'
    },
    {
      title: 'Near Metro Rail Station',
      source: 'assets/images/slider/slider-2.jpg'
     },
     {
      title: 'Permanent Campus',
      source: 'assets/images/slider/slider-3.jpg',
     }
 ];
 mainSliderOffset = 1;
 mainSliderIndex = 0;
 mainSlideCurrentSlides:any[]=[];


 topManageSlider=[
  {
   name: 'LIAKAT ALI SIKDAR',
   designation: 'assets/images/slider/Slider-1.jpg',
   dialouge: 'Entrusted with planning, implementation and evaluation.',
   image:'assets/images/management/chairman.jpg'
  },
  {
    name: 'DR. RAFIQUE U AHMED',
    designation: 'Vice Chancellor',
    dialouge: 'Entrusted with planning, implementation and evaluation.',
    image:'assets/images/management/vc.jpg'
   }
];
topManageSliderOffset = 2;
topManageSliderIndex = 0;
topManageSliderCurrentSlides:any[]=[];

letf = -760;
loadingCoursePrograms = 0 ;

loadingTestimonials = 0;
loadingPartners = 0;

allPartners:any = [];
allTestimonials:any =[];

loadingSliders = 0;
sliders:any=[];

  ngOnInit(): void {
    this.animteachers = 0;
    this.animcourses = 0;
    this.animSatisfiedClients = 0;
    this.animStudents = 0;

    this.loadingCoursePrograms = 1;
  
    this.loadingTestimonials = 1;
    this.loadingPartners = 1;
    this.loadingSliders = 1;

    this.apiService.getCarousels(0).subscribe((data:any)=>{
      this.sliders = data;
      this.loadingSliders = 2;
    })

    this.apiService.getCoursePrograms().subscribe((coursePrograms: any) => {
      this.coursePrograms = coursePrograms;
      this.allDepartments = [];

      coursePrograms.forEach((courseProgram: any) => {
        this.allDepartments = [...this.allDepartments, ...courseProgram.departments];
      });
      this.selectedCourse.title = 'all';
      this.loadingCoursePrograms = 2;
    })
    this.apiService.getTestimonials().subscribe((testimonials: any) => {
      this.allTestimonials = testimonials;
      this.loadingTestimonials = 2;
    })
    this.apiService.getPartners().subscribe((partners: any) => {
      this.allPartners = partners;
      this.loadingPartners = 2;
    })
  }

  next(){
     if(this.letf == -1140){
       this.letf = -760;
     } else if(this.letf == -760){
      this.letf = -1140;
    }
  }

  GoToTop(){
    window.scrollTo(0,0);
  }

  changeSelectedCourse(courseName:string){
      this.selectedCourse = courseName;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
     let height = document.documentElement.scrollTop;
     if(height > window.innerHeight + 100){
       this.hide = false;
     }else if(height < window.innerHeight + 100 ){
      this.hide = true;
     }
     const configuratorContainer = document.getElementById('vvvvvvvvvvvvv') as HTMLElement;
	   let offset = configuratorContainer.getBoundingClientRect().top;

     if(offset < 300 && this.animteachers == 0){
        this.addCounter();
     }
  }
  addCounter(){
    
     setInterval(()=>{
         if(this.animteachers < this.totalTeachers){
           this.animteachers = this.animteachers + 1;
         }
         if(this.animcourses < this.totalCourses){
          this.animcourses = this.animcourses + 1;
         } 
         if(this.animStudents < this.totalStudents){
          let addAmountStudents = (this.totalStudents-this.animStudents) > 18 ? 18 : (this.totalStudents-this.animStudents) ;
          this.animStudents = this.animStudents + addAmountStudents;
         }
         if(this.animSatisfiedClients < this.totalSatisfiedClients){
          let addAmountClients = (this.totalSatisfiedClients-this.animSatisfiedClients) > 60 ? 60 : this.totalSatisfiedClients-this.animSatisfiedClients ;
          this.animSatisfiedClients = this.animSatisfiedClients + addAmountClients;
         }
     },80)
  }
  
}
