import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  private baseUrl = 'https://fakestoreapi.com/products';

  constructor(private _htppClient: HttpClient) { }

  getAllProductos(): Observable<IProduct[]>{
    return this._htppClient.get<IProduct[]>(this.baseUrl);
  }

  getProductoById(id: number): Observable<IProduct>{
    return this._htppClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  public nuevoProducto(producto: IProduct): Observable<IProduct>{
    return this._htppClient.post<IProduct>(`${this.baseUrl}`, producto);
  }

  public eliminarProducto(id: number): Observable<IProduct>{
    return this._htppClient.delete<IProduct>(`${this.baseUrl}/${id}`);
  }

  public actualizarProducto(id: number, producto: IProduct): Observable<IProduct>{
    return this._htppClient.put<IProduct>(`${this.baseUrl}/${id}`, producto);
  }
}
