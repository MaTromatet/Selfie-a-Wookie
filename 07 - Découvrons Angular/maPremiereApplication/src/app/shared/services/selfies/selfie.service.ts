import { Injectable } from '@angular/core';
import { Wookie } from 'src/app/models/wookie';
import { Selfie } from '../../../models/selfie';
/**
 * Service gérant les Selfies (CRUD)
 */
@Injectable({
  providedIn: 'root',
})
export class SelfieService {
  constructor() {}
  /**
   *
   * @returns Retourne la liste complete des selfies (2 elements en dur)
   */
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
}
