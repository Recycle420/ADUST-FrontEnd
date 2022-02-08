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
  chairmanMessage: string = 'Atish Dipankar University of Science & Technology (ADUST), a centre of excellence, is stepping into the sixteen successive years with renewed pledge and enthusiasm in order to impart high quality education to its students and professionals. On this happy occasion of the glaring journey of ADUST. I would like to extend my sincere felicitations to its students, guardians, faculties, management and ADUST family as a whole. ADUST, a project of Atish Dipankar Foundation (ADF), has come into existence with the pioneering spirit of the great scholar Atish Dipankar Srijnan, an ancient Buddhist scholar, preacher and a prolific writer, who dedicated himself for the well-being of the mankind during tenth century. ADUST, thus, is committed to ensure a congenial atmosphere of free thinking and a centre of excellence, and extend all support to the students in order to make themselves worthy citizens of the nation. We are committed to offer effective and tailored classes, with utmost care and attention, to the students in the process of teaching, learning and innovation. I firmly believe that our promising, qualified, experienced and dedicated faculties are fully committed to impart quality education which is based on state-of-the-art curricula. I welcome our young and promising fellows and the guardians to visit and join the ADUST team and feel the difference. It needs collective endeavors from all the comers including students, guardians, faculty, regulating authority as well as the erudite section of the society to materialize the vision of ADUST. I am sure all concerned would extend their full cooperation in this regard. With these, I congratulate once again the students of ADUST and wish them a bright career and prosperous journey. May Allah bless us all.'
  vcMessage: string = 'Warm welcome to Atish Dipankar University of Science & Technology (ADUST) website. Atish Dipankar University of Science & Technology (ADUST) is well known for catering to their educational requirements in a big way. It is the university which is established with the vision to extend quality education to the students at a minimum affordable cost. Nothing is more valuable in this world than knowledge and wisdom. The university is a repository of knowledge and wisdom. Now is the time when development of a society and a country is a function of education and knowledge, science and Technology and the digital revolution. Our students are the leaders of development of tomorrow. Our teachers will groom them and provide them the strength and wings to fly and the university will equip them with necessary abilities and skills. ADUST provides education in the areas of arts, business, science, engineering and health sciences. Besides the academic activities various other kinds of extra-curriculum attainment have brought this university to a center of attention of stakeholders both nationally and internationally. Both teachers and students impulsively participate in different programs to make the university a centre of excellence. We are contented and committed to lead the university forward with the help of the teachers, students, officers and employees having close and constant guidance of the BOT, Syndicate and Academic council members, who have been toiling hard to retain peace and order in the campus. We strongly adhere to all forms of progressive ideas as we bear the spirit of freedom, conscience and liberal thought. ADUST believes that all-out progress will not be achievable without sound knowledge and in-depth understanding in any discipline. It wishes to utilize its total means and energy to root out the curse of unemployment and prevent social regression. ADUST visualizes attaining of social and economic emancipation, removing gender disparity and producing befitting employments for its students. ADUST dreams of a better and sustainable future for the whole nation.'
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
