import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { DepartmentAdmissionComponent } from './department-admission/department-admission.component';
import { DepartmentAboutComponent } from './department-about/department-about.component';

@NgModule({
  declarations: [
    DepartmentHomeComponent,
    PhotoGalleryComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    DepartmentAdmissionComponent,
    DepartmentAboutComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class DepartmentModule { }
