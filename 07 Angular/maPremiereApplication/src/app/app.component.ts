import { Component } from '@angular/core';
import { Selfie } from './models/selfie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Selfie a wookies';
  subTitle = 'La super application';
  logoAffiche = true;
  lesSelfies: Selfie[] = [
    { image: '', wookie: { nom: 'Chewie', selfies: [] } },
    { image: '', wookie: { nom: 'Chewie 2', selfies: [] } },
  ];
}
