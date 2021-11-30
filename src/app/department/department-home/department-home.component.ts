import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-department-home',
  templateUrl: './department-home.component.html',
  styleUrls: ['./department-home.component.scss']
})
export class DepartmentHomeComponent implements OnInit {
  loadingSliders: number =0;
  innerWidth!: number;

  constructor(private route: ActivatedRoute, private apiService:ApiService) {}

	routerSubscription!: Subscription;
  department:string = "still on dev";
  departmentId = 0;
  loadingGallery = 0;
  galleryImages:any=[];

  
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
    items: 2,
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
        items: 2 ,
        nav: true ,
        dots: false 
      }
    }
    
  }
  sliders:any =[];

  currentPage:number = 0;
  pageOffset:number = 5;
  pageArray:any =[];
  totalCount = 53;
  loadingDepartmentMessages = 0;
  departmentMessages:any = [];

  loadingDepartmentTestimonials = 0;
  departmentTestimonials:any = [];

  loadingDepartmentDetails = 0;
  departmentDetails:any ={};



  ngOnInit(){
    this.routerSubscription = this.route.paramMap.subscribe((paramMap:any) => {
      if(paramMap.params.department){
        this.department =  paramMap.params.department;
        this.departmentId = paramMap.params.id;
        this.loadSliders();
        this.loadDepartmentDetails();
        this.loadDepartmentMessages();
        this.loadDepartmentTestimonials();
        this.loadingImages();
        
      }
    });
    this.setPage(0);
  }
  ngOnDestroy(){
    this.routerSubscription.unsubscribe();
  }

  loadSliders(){
    this.loadingSliders = 1;
    this.apiService.getCarousels(this.departmentId).subscribe((data:any)=>{
      this.sliders = data;
      this.loadingSliders = 2;
    })
  }
  @HostListener('window:resize', ['$event'])
	onResize(event: { target: { innerWidth: number } }) {
		this.innerWidth = event.target.innerWidth;
	}

  setPage(pageNo:number){
    if(pageNo >= 0){
      this.currentPage = pageNo;
      let start = pageNo* this.pageOffset;
      let end = start+ this.pageOffset -1;
      if(end > this.totalCount){
        end = this.totalCount-1;
      }
      let pageArray = [];
      for(let i=start; i<=end;i++){
        pageArray.push(i);
      }
      this.pageArray = pageArray;
    }

  }

  loadingImages() {
    this.loadingGallery = 1;
    this.apiService.getShortGallery(this.departmentId).subscribe((gallery: any) => {
      this.loadingGallery = 2;
      this.galleryImages = gallery;
    })
  }

  loadDepartmentMessages(){
    this.loadingDepartmentMessages = 1;
    this.apiService.getDepartmentNessages(this.departmentId).subscribe((data:any)=>{
      this.departmentMessages = data;
      this.loadingDepartmentMessages = 2;
    })

  }

  loadDepartmentTestimonials(){
    this.loadingDepartmentTestimonials =  1;
    this.apiService.getDepartmentTestimonials(this.departmentId).subscribe((data:any)=>{
      this.departmentTestimonials = data;
      this.loadingDepartmentTestimonials = 2;
    })
  }

  loadDepartmentDetails(){
    this.loadingDepartmentDetails = 1;
    
    this.apiService.getDepartMentDetails(this.departmentId).subscribe((data:any)=>{
      this.departmentDetails = data;
    })
  }


}
