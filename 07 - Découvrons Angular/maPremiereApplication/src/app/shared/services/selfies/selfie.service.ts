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
   * methode pour récupérer les données en retournant une observable pour s'inscrire a la reception des tableaux de selfies
   * @returns
   */
  //on renvoie un observable contenant des tableaux de selfies
  getAllSelfies_asObservable(): Observable<Selfie[]> {
    // recupere les requetes http via api Mock simulé par Postman
    return this._httpClient.get<Selfie[]>(environment.apis.selfies.url);
  }

  //----------------------------------------------------------------------------------------------------------------------------------

  /**
   * Ajout d'un Selfie : envoie des données en json vers l'api PostMan
   *  et récupération du selfie ajouté
   * @param selfie
   * @returns
   */
  ajouter(selfie: Selfie): Observable<Selfie> {
    return this._httpClient.post<Selfie>(environment.apis.selfies.url, selfie);
  }

  //----------------------------------------------------------------------------------------------------------------------------------

  /**
   * Retourne un selfie correspondant à l'id avec son wookie
   * @param id 
   * @returns 
   */
  getOne(id:number):Observable<Selfie> {
    return this._httpClient.get<Selfie>(environment.apis.selfies.url + '/' + id);

  }

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
}
