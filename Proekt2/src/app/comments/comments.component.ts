import { Component, Input, output } from '@angular/core';
import { comment } from '../template';
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css',
})
export class CommentsComponent {
  @Input()
  commented: comment | undefined;
  @Input()
  ind: number = -1;
  naming() {
    if (this.commented?.poster == '') {
      return 'Anonymous';
    } else {
      return this.commented?.poster;
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
