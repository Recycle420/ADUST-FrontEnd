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
import { EventsComponent } from './events/events.component';
import { NoticesComponent } from './notices/notices.component';
import { ProgramObjectiveComponent } from './program-objective/program-objective.component';
import { ProgramOutcomesComponent } from './program-outcomes/program-outcomes.component';
import { CurriculumStructureComponent } from './curriculum-structure/curriculum-structure.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

@NgModule({
  declarations: [
    DepartmentHomeComponent,
    PhotoGalleryComponent,
    PeopleComponent,
    PeopleDetailsComponent,
    DepartmentAdmissionComponent,
    DepartmentAboutComponent,
    EventsComponent,
    NoticesComponent,
    ProgramObjectiveComponent,
    ProgramOutcomesComponent,
    CurriculumStructureComponent,
    CourseDetailsComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class DepartmentModule { }
