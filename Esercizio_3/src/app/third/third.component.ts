import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'slide',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class ThirdComponent {
  x = 30
  cliccaBottone(){
    (this.x)++
  }
}
