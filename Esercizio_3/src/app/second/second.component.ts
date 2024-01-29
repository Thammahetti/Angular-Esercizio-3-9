import { Component } from '@angular/core';
import { ThirdComponent } from '../third/third.component';
import { FourComponent } from '../four/four.component';

@Component({
  selector: 'tabella',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
  standalone:true,
  imports: [ThirdComponent,FourComponent]
})
export class SecondComponent {
  meme =[
    {
      NomeMeme1 : 'Mewing',
      Info1 : 'Meme of viral technique that supposed to change the appearance of your jawline.',
    },
    {
      NomeMeme1 : 'Noot Noot',
  
      Info1 :'Stiamo parlando del meme preso spunto dallo show Pingu ',
    }
  ]


}
