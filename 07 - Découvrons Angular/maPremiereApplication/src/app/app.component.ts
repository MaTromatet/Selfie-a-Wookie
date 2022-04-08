import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Selfie a wookies';
  subTitle = 'La super application';
  valeurARechercher = '';

  rechercherSelfies(valeurDeRecherche: string) {
    //console.log('AppComponent : ' + valeurDeRecherche);
    this.valeurARechercher = valeurDeRecherche;
  }
}
