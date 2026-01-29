import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DRIVERS } from './db-data';
import { NgFor } from '@angular/common';
import { HeadComponent } from './head/head.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, HeadComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
