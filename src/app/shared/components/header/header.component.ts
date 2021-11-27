import { Component, } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {


  constructor() { }

  departMentMenu=[
     {
       name: "Faculty of Arts and Social Sciences",
       id: "Social-Sciences"
     },
     {
      name: "Faculty of Business Administration",
      id: "Business-Administration"
    },
    {
      name: "Faculty of Engineering",
      id: "Faculty-Engineering"
    },
    {
      name: "Faculty of Science and Technology",
      id: "Faculty-Science-Technology"
    },
    {
      name: "Diploma",
      id: "Diploma"
    }
  ]

}
