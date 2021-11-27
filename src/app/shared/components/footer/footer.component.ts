import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  hide = false;
  constructor() { }

  ngOnInit(): void {
  }
  GoToTop(){
    window.scrollTo(0,0);
  }
}
