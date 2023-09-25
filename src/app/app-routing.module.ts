import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './base/components/home/home.component';
import { NotFoundComponent } from './base/components/not-found/not-found.component';

const routes : Routes = [
  {
    path :'home',
    component : HomeComponent
  },
  {
    path : '',
    redirectTo : 'home',
    pathMatch: 'full'
  },
  {
    path : '**',
    component : NotFoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
