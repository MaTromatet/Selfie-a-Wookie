import { Component, Input, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { LoggerService } from '../../../shared/services/logger/logger.service';
import { SelfieService } from '../../../shared/services/selfies/selfie.service';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css'],
})
export class SelfieListComponent implements OnInit {
  lesSelfies: Selfie[] = [];

  //avec le set, ca devient une propriété au lieu d'un attribu public et on peut y mettre du code
  @Input()
  set filtre(valeur: string) {
    console.log('SelfieListComponent ' + valeur);
  }

  constructor(
    private _loggerService: LoggerService,
    private _selfieService: SelfieService
  ) {}

  ngOnInit(): void {
    this.lesSelfies = this._selfieService.getAllSelfies();
  }
}
