import { Component } from '@angular/core';
import { WindowButtonComponent } from './components/window-button/window-button.component';
import { MainAppComponent } from './components/main-app/main-app.component';

@Component({
  selector: 'app-root',
  imports: [WindowButtonComponent, MainAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
