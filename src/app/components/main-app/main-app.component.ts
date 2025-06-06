import { Component } from '@angular/core';
import { SidebarLinkComponent } from '../sidebar-link/sidebar-link.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-app',
  imports: [SidebarLinkComponent],
  templateUrl: './main-app.component.html',
  styleUrl: './main-app.component.scss'
})
export class MainAppComponent {
  title: string = 'home.txt';

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (event.url) {
          case '/':
          case '/home':
            this.title = 'home.txt';
            break;
          case '/admin':
            this.title = 'admin.json';
        }
      }
    });
  }
}
