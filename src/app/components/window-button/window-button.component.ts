import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-window-button',
  imports: [CommonModule],
  templateUrl: './window-button.component.html',
  styleUrl: './window-button.component.scss'
})
export class WindowButtonComponent {
  @Input() class: string = '';
}
