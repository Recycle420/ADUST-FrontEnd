import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private route:Router, private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
  }

  goNext(){
    window.scrollTo(0,0);
    setTimeout(()=>{
      this.route.navigate(['../admission-survey'], { relativeTo: this.activatedRoute });
    },300)
  }
}
