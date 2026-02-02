import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [NgIf],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent {
  status: number = 0;
  nickname: String = '';
  feedback(
    Nickname: HTMLInputElement,
    checked: HTMLInputElement,
    agreeing: HTMLElement,
  ) {
    if (checked.checked != true) {
      agreeing.className = 'Error';
      return;
    }
    this.nickname = Nickname.value;
    this.status = 1;
  }
}
