import { NgIf } from '@angular/common';
import { Component, output, Output } from '@angular/core';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [NgIf],
  templateUrl: './head.component.html',
  styleUrl: './head.component.css',
})
export class HeadComponent {
  name: String = '';
  nameChange = output<String>();
  login(names: String) {
    if (names == '') {
      return;
    }
    this.name = names;
    this.nameChange.emit(this.name);
  }
}
