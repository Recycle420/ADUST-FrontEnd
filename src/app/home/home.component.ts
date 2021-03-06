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

  animteachers = 0;
  animcourses = 0;
  animSatisfiedClients = 0;
  animStudents = 0;

  totalTeachers = 160;
  totalCourses = 20;
  totalStudents = 5000;
  totalSatisfiedClients = 20000;
  selectedCourse: any = {};
  popupNotice = "";

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
        items: 2,
        nav: true,
        dots: false
      },
      992: {
        items: 3,
        nav: true,
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
        items: 1,
        nav: true,
        dots: false
      },
      992: {
        items: 1,
        nav: true,
        dots: false
      }
    }

  }

  customOptionsTopManage: OwlOptions = {

    loop: true,
    items: 2,
    lazyLoad: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1200,
    dots: true,
    nav: true,
    autoWidth: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    navSpeed: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true
      },
      768: {
        items: 2,
        nav: true,
        dots: true
      },
      992: {
        items: 2,
        nav: true,
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
        nav: true,
        dots: false
      },
      992: {
        items: 5,
        nav: false,
        dots: false
      }
    }

  }

  coursePrograms: any = [];
  allDepartments: any = [];

  loadingCoursePrograms = 0;

  loadingTestimonials = 0;
  loadingPartners = 0;

  allPartners: any = [];
  allTestimonials: any = [];

  loadingSliders = 0;
  sliders: any = [];
  menuList: any = [];

  loadmoreTestimonial: number[] = []
  chairman: any = []
  loadingChairman = 0;
  vc: any = []
  loadingVc = 0;
  loadMoreMessage: boolean = false;

  commentSurveyForm = {
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    comments: ''
  }

  initialCommentSurveyForm = {
    name: '',
    phoneNumber: '',
    email: '',
    subject: '',
    comments: ''
  }
  incompleteForm = false;
  showSubmitted = false;

  ngOnInit(): void {
    this.animteachers = 0;
    this.animcourses = 0;
    this.animSatisfiedClients = 0;
    this.animStudents = 0;

    this.loadingCoursePrograms = 1;

    this.loadingTestimonials = 1;
    this.loadingPartners = 1;
    this.loadingSliders = 1;
    this.commentSurveyForm = { ...this.initialCommentSurveyForm };

    this.apiService.getCarousels(0).subscribe((data: any) => {
      this.sliders = data;
      this.loadingSliders = 2;
    })

    this.apiService.getAdminstrators('chairman').subscribe((data: any) => {
        this.chairman = data;
        this.loadingChairman = 1;
    })

    this.apiService.getAdminstrators('vice-chancellor').subscribe((data: any) => {
        this.vc = data;
        this.loadingVc = 1;
    })

    this.apiService.getCoursePrograms(true).subscribe((coursePrograms: any) => {
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
    
    this.popupNotice = "";

    this.apiService.getPopupNotice().subscribe((data:any)=>{
      this.popupNotice = data.photo;
    })

  }

  changeSelectedCourse(courseName: string) {
    this.selectedCourse = courseName;
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
    const configuratorContainer = document.getElementById('vvvvvvvvvvvvv') as HTMLElement;
    let offset = configuratorContainer.getBoundingClientRect().top;

    if (offset < 300 && this.animteachers == 0) {
      this.addCounter();
    }
  }

  addCounter() {
    setInterval(() => {
      if (this.animteachers < this.totalTeachers) {
        this.animteachers = this.animteachers + 1;
      }
      if (this.animcourses < this.totalCourses) {
        this.animcourses = this.animcourses + 1;
      }
      if (this.animStudents < this.totalStudents) {
        let addAmountStudents = (this.totalStudents - this.animStudents) > 18 ? 18 : (this.totalStudents - this.animStudents);
        this.animStudents = this.animStudents + addAmountStudents;
      }
      if (this.animSatisfiedClients < this.totalSatisfiedClients) {
        let addAmountClients = (this.totalSatisfiedClients - this.animSatisfiedClients) > 60 ? 60 : this.totalSatisfiedClients - this.animSatisfiedClients;
        this.animSatisfiedClients = this.animSatisfiedClients + addAmountClients;
      }
    }, 80)
  }

  saveCommentSurvey() {
    if (
      this.commentSurveyForm.name.length == 0 ||
      (isNaN(Number(this.commentSurveyForm.phoneNumber)) || this.commentSurveyForm.phoneNumber.length == 0) ||
      this.commentSurveyForm.comments.length == 0 ||
      this.commentSurveyForm.subject.length == 0 ||
      this.commentSurveyForm.email.length == 0
    ) {
      this.incompleteForm = true;
    } else {
      this.incompleteForm = false;
      this.apiService.saveSurveyComments(this.commentSurveyForm).subscribe((data: any) => {
        this.showSubmitted = true;
        this.commentSurveyForm = { ...this.initialCommentSurveyForm };
        setTimeout(() => {
          this.showSubmitted = false;
        }, 5000)
      })
    }
  }

  readMoreMessage() {
    if (!this.loadMoreMessage) {
      this.loadMoreMessage = true;
    }
    else {
      this.loadMoreMessage = false;
    }
  }
}
