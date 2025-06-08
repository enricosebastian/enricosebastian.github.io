import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PublicPageBase } from '../base/public-page.base';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends PublicPageBase {
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
