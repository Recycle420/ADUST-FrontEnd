import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ BrowserAnimationsModule} from  '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AdmissionComponent } from './admission/admission.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AdmissionSurveyComponent } from './admission-survey/admission-survey.component';
import { ResearchAllComponent } from './research-all/research-all.component';
import { AdmissionAdministratorComponent } from './admission-administrator/admission-administrator.component';
import { PaymentProcedureComponent } from './pages/payment-procedure/payment-procedure.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { FutureStudentComponent } from './pages/future-student/future-student.component';
import { OnCampusComponent } from './pages/on-campus/on-campus.component';
import { PopupNoticeComponent } from './popup-notice/popup-notice.component';
import { CareerComponent } from './career/career.component';
import { VideoComponent } from './pages/media/video/video.component';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { FolderComponent } from './pages/media/folder/folder.component';
import { PhotoComponent } from './pages/media/photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AdmissionComponent,
    EventDetailsComponent,
    AdmissionSurveyComponent,
    ResearchAllComponent,
    AdmissionAdministratorComponent,
    PaymentProcedureComponent,
    AlumniComponent,
    FutureStudentComponent,
    OnCampusComponent,
    PopupNoticeComponent,
    CareerComponent,
    VideoComponent,
    FolderComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    SharedModule,
    HttpClientModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
