import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

    private carrito = new BehaviorSubject<any>([]);
    carrito$ = this.carrito.asObservable();

    agregarCarrito(producto: IProduct[]){
        const productos = this.carrito.getValue();
        productos.push(producto);
        this.carrito.next([...productos]);
    }
  constructor() { }
}
