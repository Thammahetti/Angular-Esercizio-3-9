import { Component } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { runInThisContext } from 'vm';

@Component({
  selector: 'slide',
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
  standalone: true,
  imports: [MatProgressBarModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class ThirdComponent {
  
   randomint(){
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  }
  Colore = "warn"
  x = this.randomint();
  cliccaBottone(){
   
    if(this.x >= 100 ){
      this.x = 100
    }else{
      (this.x)++
      console.log(this.x)
    }
    if(this.x < 33) {
      this.Colore = "primary"
    }
    if(this.x >= 33 && this.x < 66 ) {
      this.Colore = "accent"
    }
    if(this.x >= 66 ) {
      this.Colore = "warn"
    }
  }
  constructor() {
    if(this.x < 33) {
      this.Colore = "primary"
    }
    if(this.x >= 33 && this.x < 66 ) {
      this.Colore = "accent"
    }
    if(this.x >= 66 ) {
      this.Colore = "warn"
    }
    number : this.randomint();
  }
}
