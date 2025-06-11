import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { WindowButtonComponent } from '../window-button/window-button.component';
import { CommonEngine } from '@angular/ssr/node';

@Component({
  selector: 'app-image-container',
  imports: [CommonModule, WindowButtonComponent],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss'
})
export class ImageContainerComponent {
  @Input() src: string = 'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg';
  @Input() bottom: string = '';
  @Input() right: string = '';
  @Input() top: string = '';
  @Input() left: string = '';
}
