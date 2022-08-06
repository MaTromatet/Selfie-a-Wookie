import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { LoggerService } from './shared/services/logger/logger.service';
import { SelfieModule } from './feature/selfies/selfie.module';
import { SharedModule } from './shared/modules/shared/shared.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, HttpClientModule,SelfieModule,SharedModule,AppRoutingModule],
  providers: [
    //LoggerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
