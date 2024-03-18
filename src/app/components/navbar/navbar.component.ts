import { Component } from '@angular/core';
import { CarritoServiceService } from 'src/app/services/carrito/carrito-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  carrito: number = 0;

  constructor(private carritoService: CarritoServiceService) { }

  ngOnInit(): void {
    this.carritoService.currentProducto.subscribe(producto => this.carrito = producto);
  }
}
