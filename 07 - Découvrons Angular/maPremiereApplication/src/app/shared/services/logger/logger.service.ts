import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.prod';

//assure d'un singleton
@Injectable({
  providedIn: 'root',
})

/**
 * Service qui permet aux log de s'afficher que en dev et pas en production
 */
export class LoggerService {
  constructor() {}

  log(message: string, obj?: unknown) {
    //si je ne suis pas en Production (voir )
    if (!environment.production) {
      console.log(message, obj);
    }
  }
}
