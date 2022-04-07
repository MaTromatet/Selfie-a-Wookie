import { Wookie } from './wookie';
/**
 * représente un selfie d'un wookie
 */
export class Selfie {
  image: string;
  wookie: Wookie;
  titre: string;

  constructor() {
    this.wookie = new Wookie();
    this.image = '';
    this.titre = '';
  }
}
