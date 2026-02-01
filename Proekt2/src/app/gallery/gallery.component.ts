import { Component, Input } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { NgFor, NgIf } from '@angular/common';
import { Places } from '../db-data';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageComponent, NgFor, NgIf],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
})
export class GalleryComponent {
  @Input()
  name: String = '';
  places = Places;
  todisplay: number = 0;
  increase(a: HTMLElement) {
    this.todisplay += 1;
    this.todisplay %= this.places.length;
    a.scrollIntoView({ behavior: 'smooth' });
  }
  decrease(a: HTMLElement) {
    this.todisplay -= 1;
    this.todisplay += this.places.length;
    this.todisplay %= this.places.length;
    a.scrollIntoView({ behavior: 'smooth' });
  }
  view(i: number) {
    if (i != this.todisplay) {
      return 'none';
    } else {
      return '';
    }
  }
}
