import { Component, Input } from '@angular/core';
import { post, comment } from '../template';
import { NgFor, NgIf } from '@angular/common';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgIf, NgFor, CommentsComponent],
  templateUrl: './image.component.html',
  styleUrl: './image.component.css',
})
export class ImageComponent {
  @Input()
  i: number = -1;
  @Input()
  posted: post | undefined;
  @Input()
  name: String = '';
  status: number = 0;
  getlink() {
    return `../../assets/images/img${this.i + 1}.jpg`;
  }
  commentfunc(field: HTMLTextAreaElement) {
    let text: string = field.value;
    if (text == '') {
      return;
    }

    var temp = { poster: this?.name, content: text };
    if (this?.posted) {
      this.posted.comments.push(temp);
    }
    field.value = '';
  }
  value() {
    let a: number = this.posted?.balance ? this.posted?.balance : 0;
    a += this.status;
    return a;
  }
  like() {
    this.status = 1;
  }
  dislike() {
    this.status = -1;
  }
  styleLike() {
    if (this.status == 1) {
      return 'ActiveLike';
    } else {
      return 'LikeBtn';
    }
  }
  styleDislike() {
    if (this.status == -1) {
      return 'ActiveDislike';
    } else {
      return 'DislikeBtn';
    }
  }
  deleteComment(id: number) {
    this.posted?.comments.splice(id, 1);
  }
  statusStyle() {
    if (this.status == 1) {
      return 'Liked';
    } else if (this.status == -1) {
      return 'Disliked';
    } else {
      return '';
    }
  }
}
