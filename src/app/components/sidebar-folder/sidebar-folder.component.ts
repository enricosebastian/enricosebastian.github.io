import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sidebar-folder',
  imports: [CommonModule, NgbCollapseModule],
  templateUrl: './sidebar-folder.component.html',
  styleUrl: './sidebar-folder.component.scss'
})
export class SidebarFolderComponent {
  isCollapsed: boolean = true;
  @Input() name: string = '';


}
