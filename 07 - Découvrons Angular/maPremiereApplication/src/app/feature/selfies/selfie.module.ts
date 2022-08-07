import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { AddSelfiesComponent } from './add-selfies/add-selfies.component';
import { UnSelfieReadonlyComponent } from './un-selfie-readonly/un-selfie-readonly.component';
import { SharedModule } from 'src/app/shared/modules/shared/shared.module';
import {WebcamModule} from 'ngx-webcam';
import { SelfiesRoutingModule } from './selfies-routing.module';
import { UnSelfieComponent } from './un-selfie/un-selfie.component';



@NgModule({
  declarations: [
    SelfieListComponent,
    UnSelfieReadonlyComponent,
    AddSelfiesComponent,
    UnSelfieComponent
  ],
  imports: [
    CommonModule, SharedModule, WebcamModule, SelfiesRoutingModule
  ],
  exports: [
    SelfieListComponent
  ],
})
export class SelfieModule { }
