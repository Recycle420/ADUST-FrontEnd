import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DepartmentHeaderComponent } from './components/department-header/department-header.component';
import { NoticesComponent } from './notices/notices.component';
import { EventsComponent } from './events/events.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DepartmentHeaderComponent,
    NoticesComponent,
    EventsComponent
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
    EventsComponent
  ]
})
export class SharedModule { }
