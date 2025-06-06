import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { MainAppComponent } from './components/main-app/main-app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mysite';
}
