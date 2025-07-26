import { Component } from '@angular/core';
import { PublicPageBase } from '../base/public-page.base';
import { Meta, Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';
import { IconContainerComponent } from '../../components/icon-container/icon-container.component';

@Component({
  selector: 'app-contact',
  imports: [HeaderComponent, IconContainerComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent extends PublicPageBase {
  constructor(meta: Meta, title: Title) {
    super(meta, title);
  }

  protected override getTitle(): string {
    return 'enrico sebastian\'s contacts page';
  }
  protected override getDescription(): string {
    return 'This is where you can find contact numbers, emails, and details about Enrico Sebastian Salazar if you want to get a hold of him'
  }
}
