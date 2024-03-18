import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from 'src/app/interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class CarritoServiceService {

  private producto = new BehaviorSubject<any>(null);
  currentProducto = this.producto.asObservable();
    
    
  constructor() { }

  updateProducto(newProducto: IProduct){
    this.producto.next(newProducto);
  }
}
