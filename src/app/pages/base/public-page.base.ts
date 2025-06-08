// src/app/pages/base/public-page.base.ts
import { Directive, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Directive()
export abstract class PublicPageBase implements OnInit {
  constructor(protected meta: Meta, protected title: Title) {}

  /** Must be overridden in child class */
  protected abstract getTitle(): string;
  protected abstract getDescription(): string;

  ngOnInit(): void {
    this.title.setTitle(this.getTitle());
    this.meta.updateTag({ name: 'description', content: this.getDescription() });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}