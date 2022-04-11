import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuGeneralComponent } from './shared/components/menu-general/menu-general.component';
import { SelfieListComponent } from './feature/selfies/selfie-list/selfie-list.component';
import { UnSelfieReadonlyComponent } from './feature/selfies/un-selfie-readonly/un-selfie-readonly.component';
import { LoggerService } from './shared/services/logger/logger.service';
import { AddSelfiesComponent } from './feature/selfies/add-selfies/add-selfies.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuGeneralComponent,
    SelfieListComponent,
    UnSelfieReadonlyComponent,
    AddSelfiesComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [
    //LoggerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
