import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css'],
})
export class MenuGeneralComponent implements OnInit {
  @ViewChild('zoneRecherche', { static: false })
  maZoneDeRecherche!: ElementRef;

  //evenement (attention a prendre celui d'angularCore) output de type eventEmitter qui renvoie un string
  @Output()
  lancerRecherche: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  rechercher() {
    //on récupère la valeur de l'element avec id = zoneRecherche dans le DOM
    const valeurRecherchee = this.maZoneDeRecherche.nativeElement.value;

    //emetteur qui transmet l'information
    this.lancerRecherche.emit(valeurRecherchee);
  }
}
