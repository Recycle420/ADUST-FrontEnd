import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { DepartmentAboutComponent } from './department-about/department-about.component';
import { DepartmentAdmissionComponent } from './department-admission/department-admission.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NoticesComponent } from './notices/notices.component';
import { EventsComponent } from './events/events.component';
import { ProgramObjectiveComponent } from './program-objective/program-objective.component';
import { ProgramOutcomesComponent } from './program-outcomes/program-outcomes.component';
import { CurriculumStructureComponent } from './curriculum-structure/curriculum-structure.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { AlumniComponent } from './alumni/alumni.component';
import { ResearchComponent } from './research/research.component';
import { ClubComponent } from './club/club.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: ':department/:id',
    component: DepartmentHomeComponent,
  },
  {
    path: 'department-admission/:department/:id',
    component: DepartmentAdmissionComponent,
  },
  {
    path: 'department-gallery/:department/:id',
    component: PhotoGalleryComponent,
  },
  {
    path: 'department-about/:department/:id',
    component: DepartmentAboutComponent,
  },
  {
    path: 'program-objective/:department/:id',
    component: ProgramObjectiveComponent,
  },
  {
    path: 'program-outcomes/:department/:id',
    component: ProgramOutcomesComponent,
  },
  {
    path: 'curriculum-structure/:department/:id',
    component: CurriculumStructureComponent,
  },
  {
    path: 'course-details/:department/:id',
    component: CourseDetailsComponent,
  },
  {
    path: 'peoples/:people_type/:department/:id',
    component: PeopleComponent,
  },
  {
    path: 'people-details/:people_type/:department/:departmentid/:id',
    component: PeopleDetailsComponent,
  },
  {
    path: 'news-events/:department/:id',
    component: EventsComponent,
  },
  {
    path: 'notice/:department/:id',
    component: NoticesComponent,
  },
  {
    path: 'research/:department/:id',
    component: ResearchComponent,
  },
  {
    path: 'alumni/:department/:id',
    component: AlumniComponent,
  },
  {
    path: 'club/:department/:id',
    component: ClubComponent,
  },
  {
    path: 'contact/:department/:id',
    component: ContactComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
