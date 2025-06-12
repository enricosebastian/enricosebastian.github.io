import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-file',
  imports: [CommonModule],
  templateUrl: './sidebar-file.component.html',
  styleUrl: './sidebar-file.component.scss'
})
export class SidebarFileComponent {
  @Input() route: string = '';
  @Input() isSelected: boolean = false;
  @Input() isInsideFolder: boolean = false;
}
