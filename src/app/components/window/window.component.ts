import { Component } from '@angular/core';
import { MainAppComponent } from "../main-app/main-app.component";
import { WindowButtonComponent } from '../window-button/window-button.component';

@Component({
  selector: 'app-window',
  imports: [MainAppComponent, WindowButtonComponent],
  templateUrl: './window.component.html',
  styleUrl: './window.component.scss'
})
export class WindowComponent {}
