import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesMainComponent } from './components/pages-main/pages-main.component';
import { RegistroComponent } from './components/registro/registro.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: PagesMainComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
