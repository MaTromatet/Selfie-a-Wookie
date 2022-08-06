import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { SelfieListComponent } from '../feature/selfies/selfie-list/selfie-list.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

//Module dédié pour spécifier les routes

const routes : Routes = [
  {
    path:'', pathMatch: 'full', redirectTo:'/selfies'

  },
  {
    path:'**', component : NotFoundComponent    //si autres routes

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
export class AppRoutingModule { }
