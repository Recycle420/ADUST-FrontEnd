import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { UnderDevelopmentComponent } from './shared/components/under-development/under-development.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { AdmissionSurveyComponent } from './admission-survey/admission-survey.component';
import { ResearchAllComponent } from './research-all/research-all.component';
import { AdmissionAdministratorComponent } from './admission-administrator/admission-administrator.component';
import { PaymentProcedureComponent } from './pages/payment-procedure/payment-procedure.component';
import { AlumniComponent } from './pages/alumni/alumni.component';
import { FutureStudentComponent } from './pages/future-student/future-student.component';
import { OnCampusComponent } from './pages/on-campus/on-campus.component';
import { PdfPreviewComponent } from './shared/components/pdf-preview/pdf-preview.component';
import { CareerComponent } from './career/career.component';
import { VideoComponent } from './pages/media/video/video.component';
import { FolderComponent } from './pages/media/folder/folder.component';
import { PhotoComponent } from './pages/media/photo/photo.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'admission-and-communication-team',
    component: AdmissionAdministratorComponent
  },
  {
    path: 'admission',
    component: AdmissionComponent
  },
  {
    path: 'admission-test-result',
    component: UnderDevelopmentComponent
  },
  {
    path: 'admission-survey',
    component: AdmissionSurveyComponent
  },
  {
    path: 'event-details/:id',
    component: EventDetailsComponent
  },
  {
    path: 'research-all',
    component: ResearchAllComponent
  },
  {
    path: 'image-folder',
    component: FolderComponent
  },
  {
    path: 'photo-gallery/:id/:name',
    component: PhotoComponent
  },
  {
    path: 'video-gallery',
    component: VideoComponent
  },
  {
    path: 'payment-procedure',
    component: PaymentProcedureComponent
  },
  {
    path: 'future-student',
    component: FutureStudentComponent
  },
  {
    path: 'on-campus',
    component: OnCampusComponent
  },
  {
    path: 'alumni',
    component: AlumniComponent,
  },
  {
    path: 'pdf-preview',
    component: PdfPreviewComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
		path: 'about',
		loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)
	},
  {
		path: 'authority',
		loadChildren: () => import('./about/about.module').then((m) => m.AboutModule)
	},
  {
		path: 'department',
		loadChildren: () => import('./department/department.module').then((m) => m.DepartmentModule)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
