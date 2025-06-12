import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PublicPageBase } from '../base/public-page.base';
import { ImageContainerComponent } from '../../components/image-container/image-container.component';
import { ImageSize } from '../../enums/sizes.enums';
import { HeaderComponent } from '../../components/header/header.component';
import { SpanComponent } from '../../components/span/span.component';

@Component({
  selector: 'app-home',
  imports: [ImageContainerComponent, HeaderComponent, SpanComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends PublicPageBase {
  ImageSize = ImageSize;

  constructor(meta: Meta, title: Title) {
    super(meta, title);
  }

  protected override getTitle(): string {
    return 'enricosebastian.txt';
  }
  protected override getDescription(): string {
    return 'Thsi is Enrico Sebastian\'s official website and project portfolio. You can find details about him and how to contact him in this page'
  }
}
