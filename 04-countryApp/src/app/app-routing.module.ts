import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/homePage.component';
import { AboutPagesComponent } from './shared/pages/aboutPage.component';
import { ContactPagesComponent } from './shared/pages/contactPage.component';

  const routes: Routes = [
    // {
    //   path: '',
    //   component: HomePageComponent
    // },
    {
      path: 'about',
      component: AboutPagesComponent
    },
    {
      path: 'contact',
      component: ContactPagesComponent
    },
    {
      path: 'countries',
      loadChildren: () => import('./countries/countries.module').then( m => m.CountriesModule )
    },
    {
      path: '**',
      redirectTo: 'countries'
    }

  ];

@NgModule({
  imports: [
    RouterModule.forRoot( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
