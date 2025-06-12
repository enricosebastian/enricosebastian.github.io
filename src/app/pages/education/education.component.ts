import { Component } from '@angular/core';
import { PublicPageBase } from '../base/public-page.base';
import { Meta, Title } from '@angular/platform-browser';
import { HeaderComponent } from '../../components/header/header.component';
import { SpanComponent } from '../../components/span/span.component';
import { ImageContainerComponent } from '../../components/image-container/image-container.component';
import { ImageSize } from '../../enums/sizes.enums';

@Component({
  selector: 'app-education',
  imports: [HeaderComponent, SpanComponent, ImageContainerComponent],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent extends PublicPageBase {
  ImageSize = ImageSize;

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
