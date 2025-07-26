import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { SpanComponent } from '../../components/span/span.component';
import { ImageContainerComponent } from '../../components/image-container/image-container.component';
import { ImageSize } from '../../enums/sizes.enums';

@Component({
  selector: 'app-career',
  imports: [HeaderComponent, SpanComponent, ImageContainerComponent],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss'
})
export class CareerComponent {
  ImageSize = ImageSize;
}
