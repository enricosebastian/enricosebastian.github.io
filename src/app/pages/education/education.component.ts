import { Component } from '@angular/core';
import { PublicPageBase } from '../base/public-page.base';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent extends PublicPageBase {

  constructor(meta: Meta, title: Title) {
    super(meta, title);
  }

  protected override getTitle(): string {
    return 'enrico sebastian\'s education';
  }
  protected override getDescription(): string {
    return 'This area discusses  Enrico Sebastian Salazar\'s formal education in De La Salle University Manila'
  }

}
