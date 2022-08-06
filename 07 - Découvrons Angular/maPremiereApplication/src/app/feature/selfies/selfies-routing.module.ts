import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { SelfieListComponent } from './selfie-list/selfie-list.component';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';

//Module dédié pour spécifier les routes

const routes : Routes = [
  {
    path:'selfies',component : SelfieListComponent

  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SelfiesRoutingModule { }
