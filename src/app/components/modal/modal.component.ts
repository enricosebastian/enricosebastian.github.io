import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
   templateUrl: './modal.component.html',
})
export class ModalComponent {
  @Input() message: string = '';

  constructor(public activeModal: NgbActiveModal) {}

  displayMessage(): string {
    return `You said "${this.message}"... that's good to know...`;
  }
}
