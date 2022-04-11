import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Selfie } from '../../../models/selfie';

@Component({
  selector: 'app-add-selfies',
  templateUrl: './add-selfies.component.html',
  styleUrls: ['./add-selfies.component.css'],
})
export class AddSelfiesComponent implements OnInit {
  @Output()
  public annulerAjouter: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selfieARenseigner: Selfie = new Selfie();

  ngOnInit(): void {}

  clickSurAnnulerSaisie() {
    this.annulerAjouter.emit({});
  }

  clickSurAjouterSaisie() {}
}
