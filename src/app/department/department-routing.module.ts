import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderDevelopmentComponent } from '../shared/components/under-development/under-development.component';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { DepartmentAboutComponent } from './department-about/department-about.component';
import { DepartmentAdmissionComponent } from './department-admission/department-admission.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NoticesComponent } from './notices/notices.component';
import { EventsComponent } from './events/events.component';

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
    component: UnderDevelopmentComponent,
  },
  {
    path: 'alumnus/:department/:id',
    component: UnderDevelopmentComponent,
  },
  {
    path: 'contact/:department/:id',
    component: UnderDevelopmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
