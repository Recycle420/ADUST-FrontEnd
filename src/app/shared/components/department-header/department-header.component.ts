import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-header',
  templateUrl: './department-header.component.html',
  styleUrls: ['./department-header.component.scss']
})
export class DepartmentHeaderComponent implements OnInit {
  @Input() currentDepartment!:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
