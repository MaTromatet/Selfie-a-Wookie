import { Wookie } from './wookie';
/**
 * représente un selfie d'un wookie
 */
export class Selfie {
  id: number | undefined;
  image: string = '';
  imageAs63 : string='';
  wookie: Wookie;
  titre: string = '';

  constructor() {
    this.wookie = new Wookie();
  }
}
