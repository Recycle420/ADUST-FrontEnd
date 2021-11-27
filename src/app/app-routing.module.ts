import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'contact',
    component: ContactUsComponent
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
  imports: [RouterModule.forRoot(routes,  {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
