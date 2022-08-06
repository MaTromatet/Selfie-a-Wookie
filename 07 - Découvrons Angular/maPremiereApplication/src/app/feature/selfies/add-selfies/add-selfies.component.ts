import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';

import { Observable, Subject } from 'rxjs';
import { SelfieService } from 'src/app/shared/services/selfies/selfie.service';
import { Selfie } from '../../../models/selfie';

@Component({
  selector: 'app-add-selfies',
  templateUrl: './add-selfies.component.html',
  styleUrls: ['./add-selfies.component.css'],
})
export class AddSelfiesComponent implements OnInit {

      // toggle webcam on/off
      public showWebcam = true;
      public deviceId: string ="";
      public videoOptions: MediaTrackConstraints = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
      };
      public errors: WebcamInitError[] = [];
    
      // latest snapshot
      public webcamImage: WebcamImage | null = null;
    
      // webcam snapshot trigger
      private trigger: Subject<void> = new Subject<void>();
   
  @Output()
  public annulerAjouter: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  selfieARenseigner: Selfie = new Selfie();

  //---------------------------------------------------------------------------------

  constructor(private _selfieService: SelfieService) {}

  public ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {});
  }

  //---------------------------------------------------------------------------------

  clickSurAnnulerSaisie() {
    this.annulerAjouter.emit({});
  }

  clickSurAjouterSaisie() {
    this._selfieService
      .ajouter(this.selfieARenseigner)
      .subscribe((item) => (this.selfieARenseigner = item));
  }


//Webcam----------------------------------------------------------------------------------
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

}
