import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { LoggerService } from '../../../shared/services/logger/logger.service';
import { Subscription, switchMap } from 'rxjs';
import { Selfie } from '../../../models/selfie';
import { SelfieService } from '../../../shared/services/selfies/selfie.service';

@Component({
  selector: 'app-un-selfie',
  templateUrl: './un-selfie.component.html',
  styleUrls: ['./un-selfie.component.css']
})
export class UnSelfieComponent implements OnInit, OnDestroy {

  private subscriptions : Subscription[]=[];

  public _leSelfie : Selfie | null = null;

  //AcitivatedRoute est la route en cours
  constructor(private _route:ActivatedRoute,private _logger : LoggerService,private _selfieService : SelfieService) { }

  ngOnInit(): void {
    // const subscription = this._route.params.subscribe(params => {
    //   const selfieId = params['id'];
    //   this._selfieService.getOne(selfieId).subscribe(selfie => {this._leSelfie=selfie} );
    // })

    //permet de passer d'un flux à un autre flux au lieu de faire des subscribe à la suite
    const subscription = this._route.params.pipe(
      switchMap(params => {
        const selfieId = params['id'];
        return this._selfieService.getOne(selfieId);
      })).subscribe(item => this._leSelfie=item);
      

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

}
