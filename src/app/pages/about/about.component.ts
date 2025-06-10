import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
import { PublicPageBase } from '../base/public-page.base';
import { ImageContainerComponent } from "../../components/image-container/image-container.component";

@Component({
  selector: 'app-about',
  imports: [ImageContainerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent extends PublicPageBase {
  constructor(meta: Meta, title: Title) {
    super(meta, title);
  }

  protected override getTitle(): string {
    return 'enrico sebastian\'s about page';
  }
  protected override getDescription(): string {
    return 'This is the about page of Enrico Sebastian Salazar. Learn more about this .NET full stack developer.'
  }
}
