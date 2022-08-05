import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

import { Wookie } from 'src/app/models/wookie';
//import { environment } from 'src/environments/environment.prod';
import { environment } from 'src/environments/environment';
import { Selfie } from '../../../models/selfie';
import { LoggerService } from '../logger/logger.service';

/**
 * Service gérant les Selfies (CRUD)
 */
@Injectable({
  providedIn: 'root',
})
export class SelfieService {
  constructor(
    private _loggerService: LoggerService,
    private _httpClient: HttpClient
  ) {}

  //----------------------------------------------------------------------------------------------------------------------------------

  /**
   *
   * @returns Retourne la liste complete des selfies (2 elements en dur)
   */
  /*
  getAllSelfies(): Selfie[] {
    const tableau: Selfie[] = [];

    //1er facon
    let selfie = new Selfie();
    selfie.image =
      'https://www.theriderpost.com/wp-content/uploads/2016/06/896e3e36d885874856df151425f1ce5484412952-1.jpeg';
    selfie.titre = 'Trop bien le Skate';
    selfie.wookie = new Wookie();
    selfie.wookie.nom = 'Chewie';

    tableau.push(selfie);

    //2em facon avec prototypage
    tableau.push({
      image: 'http://www.groomlidays.com/wp-content/uploads/2016/07/Wookie.jpg',
      wookie: { nom: 'Chewie 2', selfies: [] },
      titre: 'Hey Baby !',
    });

    return tableau;
  }
*/
  //----------------------------------------------------------------------------------------------------------------------------------

  /**
   * methode pour récupérer les données en retournant une observable pour s'inscrire a la reception des tableaux de selfies
   * @returns
   */
  //on renvoie un observable contenant des tableaux de selfies
  getAllSelfies_asObservable(): Observable<Selfie[]> {
    /*
    const tableau = this.getAllSelfies();

    //1er Test
    //retourne le tableau de maniere synchrone
    // return of(tableau);

    //------------------------------------------------------------------------------

    //2em Test
    //retourne un tableau avec 2 selfies dedans toutes les secondes
    return interval(1000).pipe(
      map((entier) => [
        {
          image:
            'https://www.theriderpost.com/wp-content/uploads/2016/06/896e3e36d885874856df151425f1ce5484412952-1.jpeg',
          titre: 'Trop bien le Skate ' + entier,
          wookie: {
            nom: 'Chewie',
            selfies: [],
          },
        },
        {
          image:
            'http://www.groomlidays.com/wp-content/uploads/2016/07/Wookie.jpg',
          titre: 'Hey Baby !',
          wookie: {
            nom: 'Turloff',
            selfies: [],
          },
        },
      ])
    );
*/

    //-------------------------------------------------------------------------------

    //tableau de json pour PostMan :
    //[{"image":"https://www.theriderpost.com/wp-content/uploads/2016/06/896e3e36d885874856df151425f1ce5484412952-1.jpeg","titre":"Trop bien le Skate","wookie":{"nom":"Chewie","selfies":[]}},{"image":"http://www.groomlidays.com/wp-content/uploads/2016/07/Wookie.jpg","titre":"Hey Baby !","wookie":{"nom":"Turloff","selfies":[]}}]

    //3em Test
    // recupere les requetes http via api Mock simulé par Postman
    return this._httpClient.get<Selfie[]>(environment.apis.selfies.url);
  }

  /**
   * Ajout d'un Selfie : envoie des données en json vers l'api PostMan
   *  et récupération du selfie ajouté
   * @param selfie
   * @returns
   */
  ajouter(selfie: Selfie): Observable<Selfie> {
    return this._httpClient.post<Selfie>(environment.apis.selfies.url, selfie);
  }
}
