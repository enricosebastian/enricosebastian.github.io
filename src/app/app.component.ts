import { Component } from '@angular/core';
import { WindowButtonComponent } from './components/window-button/window-button.component';
import { IdeComponent } from './components/ide/ide.component';

@Component({
  selector: 'app-root',
  imports: [WindowButtonComponent, IdeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
