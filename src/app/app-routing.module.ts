import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProgessComponent } from './pages/progess/progess.component';
import { PagesComponent } from './pages/pages.component';

const routes: Routes = [
  {
    path:'', 
    component: PagesComponent,
    children:[
      {path: 'dashboard', component:DashboardComponent},
      {path: 'progress', component:ProgessComponent},
      {path: 'grafica', component:Grafica1Component},
      {path: '', redirectTo:'/dashboard', pathMatch:'full'},
    ]
  },
  

  {path: 'register', component:RegisterComponent},
  {path: 'login', component:LoginComponent},

  {path: '**', component:NopagefoundComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
