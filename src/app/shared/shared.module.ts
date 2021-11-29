import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DepartmentHeaderComponent } from './components/department-header/department-header.component';
import { NoticesComponent } from './components/notices/notices.component';
import { EventsComponent } from './components/events/events.component';
import { UnderDevelopmentComponent } from './components/under-development/under-development.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DepartmentHeaderComponent,
    NoticesComponent,
    EventsComponent,
    UnderDevelopmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    DepartmentHeaderComponent,
    NoticesComponent,
    EventsComponent,
    UnderDevelopmentComponent
  ]
})
export class SharedModule { }
