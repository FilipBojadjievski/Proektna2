import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgFor } from '@angular/common';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PostsComponent } from './posts/posts.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    HeadComponent,
    MainComponent,
    GalleryComponent,
    PostsComponent,
    FooterComponent,
    FeedbackComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  name: String = '';
  poster: String = '';
  updateName(names: String) {
    this.name = names;
  }
}
