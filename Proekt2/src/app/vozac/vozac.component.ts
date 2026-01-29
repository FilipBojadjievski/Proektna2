import { Component, Input } from '@angular/core';
import { Shofer } from './shofer';
import {
  NgFor,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgClass,
} from '@angular/common';
@Component({
  selector: 'app-vozac',
  standalone: true,
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass],
  templateUrl: './vozac.component.html',
  styleUrl: './vozac.component.css',
})
export class VozacComponent {
  @Input()
  shofer: Shofer | undefined;
  @Input()
  indeks: number = 0;
  funk() {
    var link = '';
    if (this.shofer?.iconUrl != undefined) {
      link = this.shofer?.iconUrl;
    } else {
      link = 'https://www.google.com/';
    }
    window.open(link, '_blank');
  }
  stilovi() {
    return 'underline';
  }
  klasi() {
    return {
      begin: this.shofer?.category == 'EXPERT',
      adv: this.shofer?.category == 'ASD',
      main: true,
    };
  }
  klasi2() {
    if (this.shofer?.category == 'ASD') {
      return 'adv';
    } else {
      return 'main';
    }
  }
}
