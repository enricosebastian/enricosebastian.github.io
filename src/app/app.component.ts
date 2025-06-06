import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainWindowComponent } from './components/main-window/main-window.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainWindowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mysite';
}
