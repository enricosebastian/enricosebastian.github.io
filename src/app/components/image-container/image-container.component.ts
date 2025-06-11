import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WindowButtonComponent } from '../window-button/window-button.component';

@Component({
  selector: 'app-image-container',
  imports: [CommonModule, WindowButtonComponent],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss'
})
export class ImageContainerComponent {
}
