import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-span',
  imports: [CommonModule],
  templateUrl: './span.component.html',
  styleUrl: './span.component.scss'
})
export class SpanComponent {
  @Input() tagName: string = '';
  @Input() isBold: boolean = false;
}
