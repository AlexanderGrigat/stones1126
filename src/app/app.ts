import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'stn-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    MatToolbarModule,
    MatCardModule,
    RouterOutlet,
    RouterLink,
    DatePipe,
    UpperCasePipe,
  ],
})
export class App {
  protected readonly title = signal('stones');
  heute = new Date();
}
