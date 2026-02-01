import { Component, Input } from '@angular/core';
import { post } from '../template';
import { NgIf } from '@angular/common';
import { stat } from 'fs';
@Component({
  selector: 'app-image',
  standalone: true,
  imports: [NgIf],
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
  comment(text: String) {
    if (text == '') {
      return;
    }
  }
  value() {
    var a = this.posted?.balance ? this.posted?.balance : 0;
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
}
