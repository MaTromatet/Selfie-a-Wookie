import { Component } from '@angular/core';
import { LoggerService } from './shared/services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Selfie a wookies';
  subTitle = 'La super application';
  valeurARechercher = '';

  // private _loggerService: LoggerService = null;
  // constructor(loggerService: LoggerService) {
  //   this._loggerService = loggerService;
  // }
  //Equivaut à :
  constructor(private LoggerService: LoggerService) {}

  rechercherSelfies(valeurDeRecherche: string) {
    this.LoggerService.log('AppComponent : ' + valeurDeRecherche);
    this.valeurARechercher = valeurDeRecherche;
  }
}
