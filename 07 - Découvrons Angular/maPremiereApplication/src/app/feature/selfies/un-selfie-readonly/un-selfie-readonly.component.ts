import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Selfie } from '../../../models/selfie';

@Component({
  selector: 'app-un-selfie-readonly',
  templateUrl: './un-selfie-readonly.component.html',
  styleUrls: ['./un-selfie-readonly.component.css'],
})
export class UnSelfieReadonlyComponent implements OnInit {
  @Input()
  public unSelfie: Selfie = new Selfie();

  constructor(private _router : Router) {}

  ngOnInit(): void {}

  clickPourDuel(){
    this._router.navigate(["/duels/nouveau"])
  }
}
