import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon-container',
  imports: [CommonModule],
  templateUrl: './icon-container.component.html',
  styleUrl: './icon-container.component.scss'
})
export class IconContainerComponent {
  @Input() src: string = '';
  @Input() link: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
}
