import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { LoggerService } from './shared/services/logger/logger.service';
import { SelfieModule } from './feature/selfies/selfie.module';
import { SharedModule } from './shared/modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent
  ],
  imports: [BrowserModule, HttpClientModule,SelfieModule,SharedModule],
  providers: [
    //LoggerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
