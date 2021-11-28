import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  hide = true;
  constructor() { }

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
}
