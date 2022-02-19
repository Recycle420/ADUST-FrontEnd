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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    AdmissionComponent,
    EventDetailsComponent,
    AdmissionSurveyComponent,
    ResearchAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CarouselModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
