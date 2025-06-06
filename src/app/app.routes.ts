import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,
  },
];