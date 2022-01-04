import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private route:Router, private activatedRoute: ActivatedRoute){

  }
  hide = true;

  ngOnInit(): void {
  }
  GoToTop(){
    window.scrollTo(0,0);
  }
  
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event: any) {
     let height = document.documentElement.scrollTop;
     if(height > window.innerHeight + 100){
       this.hide = false;
     }else if(height < window.innerHeight + 100 ){
      this.hide = true;
     }
  }

  goNext(){
    window.scrollTo(0,0);
    setTimeout(()=>{
      this.route.navigate(['../admission-survey'], { relativeTo: this.activatedRoute });
    },300)
    
  }
}
