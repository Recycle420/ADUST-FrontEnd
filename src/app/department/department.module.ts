import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentHomeComponent } from './department-home/department-home.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [
    DepartmentHomeComponent,
    PhotoGalleryComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    SharedModule,
    CarouselModule
  ]
})
export class DepartmentModule { }
