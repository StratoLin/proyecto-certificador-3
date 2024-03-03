import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesMainComponent } from './components/pages-main/pages-main.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CrudProductosComponent } from './components/crud-productos/crud-productos.component';
import { HistorialProductoComponent } from './components/historial-producto/historial-producto.component';

const routes: Routes = [
  {path: 'registro', component: RegistroComponent},
  {path: 'inicio', component: PagesMainComponent},
  {path: 'login', component: LoginComponent},
  {path: 'producto/:id', component: ProductosComponent},
  {path: 'agregar', component: CrudProductosComponent},
  {path: 'historial-compra', component: HistorialProductoComponent},
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
