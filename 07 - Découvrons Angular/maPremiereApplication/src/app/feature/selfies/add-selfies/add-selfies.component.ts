import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';
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

  constructor(private _selfieService: SelfieService) {}

  ngOnInit(): void {}

  clickSurAnnulerSaisie() {
    this.annulerAjouter.emit({});
  }

  clickSurAjouterSaisie() {
    this._selfieService
      .ajouter(this.selfieARenseigner)
      .subscribe((item) => (this.selfieARenseigner = item));

    //informer le parent
  }
}
