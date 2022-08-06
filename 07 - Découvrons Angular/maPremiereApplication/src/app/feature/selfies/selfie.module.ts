import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { AddSelfiesComponent } from './add-selfies/add-selfies.component';
import { UnSelfieReadonlyComponent } from './un-selfie-readonly/un-selfie-readonly.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import {WebcamModule} from 'ngx-webcam';



@NgModule({
  declarations: [
    SelfieListComponent,
    UnSelfieReadonlyComponent,
    AddSelfiesComponent
  ],
  imports: [
    CommonModule, SharedModule, WebcamModule
  ],
  exports: [
    SelfieListComponent,
  ],
})
export class SelfieModule { }
