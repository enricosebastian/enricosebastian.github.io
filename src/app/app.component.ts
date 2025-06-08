import { Component } from '@angular/core';
import { MainWindowComponent } from './components/main-window/main-window.component';

@Component({
  selector: 'app-root',
  imports: [MainWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
