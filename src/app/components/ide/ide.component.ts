import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { SidebarFileComponent } from '../sidebar-file/sidebar-file.component';
import { CommonModule } from '@angular/common';
import { SidebarFile } from '../../interfaces/sidebarfile.interface';
import { ModalComponent } from '../modal/modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SidebarFolderComponent } from '../sidebar-folder/sidebar-folder.component';

@Component({
  selector: 'app-ide',
  imports: [RouterOutlet, SidebarFileComponent, SidebarFolderComponent, CommonModule],
  templateUrl: './ide.component.html',
  styleUrl: './ide.component.scss'
})
export class IdeComponent {
  file_header: string = 'home.txt';

  sidebarFiles: SidebarFile[] = [
    {name: 'home', fileExtension: 'txt', isSelected: false},
    {name: 'about', fileExtension: 'json', isSelected: false},
    {name: 'contact', fileExtension: 'cpp', isSelected: false},
  ];

  constructor(private router: Router, private modalService: NgbModal) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let url = event.url.substring(1);
        url = url === '' ? 'home' : url;

        let selected_route = this.sidebarFiles.find(sf => sf.name === url);

        if (!selected_route) {
          console.warn(`Unknown route: ${event.url}`);
          selected_route = this.sidebarFiles.find(sf => sf.name === 'home');
        }

        if (!selected_route) {
          throw new Error(`Cannot find route ${event.url} and it does not exist in list of sidebarFiles`);
        }

        this.file_header = `${selected_route.name}.${selected_route.fileExtension}`;

        this.sidebarFiles = this.sidebarFiles.map(sf => ({
          ...sf,
          isSelected: sf.name === url
        }));
      }
    });
  }

  handleKeyPress(input: HTMLInputElement) {
    const value = input.value;

    if (value === '') {
      return;
    }

    input.value = '';

    const modalRef = this.modalService.open(ModalComponent, {centered: true});
    modalRef.componentInstance.message = value;
  }
}
