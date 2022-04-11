import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Selfie } from 'src/app/models/selfie';
import { LoggerService } from '../../../shared/services/logger/logger.service';
import { SelfieService } from '../../../shared/services/selfies/selfie.service';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css'],
})
export class SelfieListComponent implements OnInit, OnDestroy {
  //Variable null si pas de selfies a ajouter sinon c'est le selfie a ajouter
  public selfieAAjouter: Selfie | null = null;

  //liste des souscriptions
  _lesSouscriptions: Subscription[] = [];

  lesSelfies: Selfie[] = [];

  constructor(
    private _loggerService: LoggerService,
    private _selfieService: SelfieService
  ) {}

  //avec le set, ca devient une propriété au lieu d'un attribu public et on peut y mettre du code
  @Input()
  set filtre(valeur: string) {
    console.log('SelfieListComponent ' + valeur);
  }

  ngOnInit(): void {
    //pour recuperer les données en dur grace au selfieService
    //this.lesSelfies = this._selfieService.getAllSelfies();

    //pour souscrire à un observable
    const subscriptionEnCours = this._selfieService
      .getAllSelfies_asObservable()
      .subscribe((unTableau) => (this.lesSelfies = unTableau)); // =  .subscribe (function (unTableau) {this.lesSelfies = unTableau})

    //on récupère la souscription en cours dans le tableau de souscriptions
    this._lesSouscriptions.push(subscriptionEnCours);
  }

  //si le composant est détruit, on désouscrire toutes les subscriptions
  ngOnDestroy(): void {
    this._lesSouscriptions.forEach((item) => item.unsubscribe());
  }

  //methode d'affichage du formulaire d'ajout de selfies
  demandeAfficherPourAjoutSelfie(): void {
    this.selfieAAjouter = new Selfie();
    this.selfieAAjouter.titre = 'test 01';
  }

  cacherZoneAjoutSelfie(): void {
    this.selfieAAjouter = null;
  }
}
