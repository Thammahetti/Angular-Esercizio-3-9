import { Component } from '@angular/core';
import { SecondComponent } from './second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [SecondComponent]
})
export class AppComponent {
  title = 'Esercizio_3';
  text1 = 'TOP 2';
  text2 = 'BEST MEMES';
}
