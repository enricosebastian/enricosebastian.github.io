import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { WindowButtonComponent } from '../window-button/window-button.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  imports: [WindowButtonComponent]
})
export class ModalComponent {
  @Input() message: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  displayMessage(): string {
    return `You said "${this.message}"... that's good to know...`;
  }
}
