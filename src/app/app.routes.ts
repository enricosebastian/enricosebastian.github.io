import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ErrorComponent } from './pages/error/error.component';
import { EducationComponent } from './pages/education/education.component';
import { CareerComponent } from './pages/career/career.component';
import { ProjectsComponent } from './pages/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];