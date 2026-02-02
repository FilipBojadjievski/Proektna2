import { Component, Input, output } from '@angular/core';
import { Blog } from '../template';
@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  @Input()
  posted: Blog | undefined;
  @Input()
  ind: number = -1;
  naming() {
    if (this.posted?.poster == '') {
      return 'Anonymous';
    } else {
      return this.posted?.poster;
    }
  }
  timestamp() {
    const now = new Date();
    return `${now.getDate()}.${now.getMonth()}.${now.getFullYear()} ${now.getHours()}:${parseInt((now.getMinutes() / 10).toString(), 10)}${now.getMinutes() % 10}`;
  }
  todel = output<number>();
  delete() {
    this.todel.emit(this.ind);
  }
}
