import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router'
//modulos
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';


const routes: Routes = [
  
  
  //path: '/dashboard' PagesRouting
  //path: '/auth' AuthRouting
  {path: '', redirectTo:'/dashboard', pathMatch:'full'},
        
  {path: '**', component:NopagefoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    //rutas hijas separada en otro modulo del pages
    PagesRoutingModule,
    //auth 
    AuthRoutingModule
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
