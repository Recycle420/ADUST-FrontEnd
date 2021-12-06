import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnderDevelopmentComponent } from '../shared/components/under-development/under-development.component';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { PeopleComponent } from './people/people.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const routes: Routes = [
  {
    path: ':department/:id',
    component: DepartmentHomeComponent,
  },
  {
    path: 'department-gallery/:department/:id',
    component: PhotoGalleryComponent,
  },
  {
    path: 'about-us/:department/:id',
    component: UnderDevelopmentComponent,
  },
  {
    path: 'peoples/:people_type/:department/:id',
    component: PeopleComponent,
  },
  {
    path: 'news-events/:department/:id',
    component: UnderDevelopmentComponent,
  },
  {
    path: 'notice/:department/:id',
    component: UnderDevelopmentComponent,
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
  },
  {
    path: 'admission/:department/:id',
    component: UnderDevelopmentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
