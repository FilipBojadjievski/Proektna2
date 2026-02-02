import { Component, Input } from '@angular/core';
import { Blog } from '../template';
import { timeLog } from 'console';
import { BlogsComponent } from '../blogs/blogs.component';
import { NgFor, NgIf } from '@angular/common';
import { post } from '../db-data';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [BlogsComponent, NgFor, NgIf],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  @Input()
  name: string = 'Anonymus';
  todisplay: number = 0;
  increase(a: HTMLElement) {
    this.todisplay += 1;
    this.todisplay %= this.posts.length;
    a.scrollIntoView({ behavior: 'smooth' });
  }
  decrease(a: HTMLElement) {
    this.todisplay -= 1;
    this.todisplay += this.posts.length;
    this.todisplay %= this.posts.length;
    a.scrollIntoView({ behavior: 'smooth' });
  }
  view(i: number) {
    if (i != this.todisplay) {
      return 'none';
    } else {
      return '';
    }
  }
  posts: Blog[] = [post];
  post(title: HTMLInputElement, content: HTMLTextAreaElement) {
    if (title.value == '' || content.value == '') {
      return;
    }
    let temp: Blog = {
      poster: this.name,
      title: title.value,
      content: content.value,
    };
    this.posts.push(temp);
    title.value = '';
    content.value = '';
    this.todisplay = this.posts.length - 1;
  }
  deletePost(id: number) {
    this.posts?.splice(id, 1);
    if (this.todisplay > this?.posts.length - 1) {
      this.todisplay = this?.posts.length - 1;
    }
  }
}
