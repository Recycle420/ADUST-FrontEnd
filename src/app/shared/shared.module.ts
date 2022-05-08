import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { DepartmentHeaderComponent } from './components/department-header/department-header.component';
import { NoticesComponent } from './components/notices/notices.component';
import { EventsComponent } from './components/events/events.component';
import { UnderDevelopmentComponent } from './components/under-development/under-development.component';
import { PdfPreviewComponent } from './components/pdf-preview/pdf-preview.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DepartmentHeaderComponent,
    NoticesComponent,
    EventsComponent,
    UnderDevelopmentComponent,
    PdfPreviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PdfViewerModule
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
