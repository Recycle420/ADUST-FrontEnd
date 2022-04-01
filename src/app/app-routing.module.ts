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
    path: 'media',
    component: UnderDevelopmentComponent
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
