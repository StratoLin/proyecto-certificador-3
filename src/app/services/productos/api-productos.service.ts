import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiProductosService {

  private baseUrl = 'http://localhost:8080/semana08/productos';

  constructor(private _htppClient: HttpClient) { }

  getAllProductos(): Observable<IProduct[]>{
    
    return this._htppClient.get<IProduct[]>(`${this.baseUrl}`);
  }

  getProductoById(id: number): Observable<IProduct>{
    return this._htppClient.get<IProduct>(`${this.baseUrl}/${id}`);
  }

  nuevoProducto(producto: IProduct): Observable<IProduct>{
    return this._htppClient.post<IProduct>(`${this.baseUrl}`, {...producto});
  }

  eliminarProducto(id: number): Observable<IProduct>{
    return this._htppClient.delete<IProduct>(`${this.baseUrl}/${id}`);
  }

  actualizarProducto(id: number, producto: IProduct): Observable<IProduct>{
    return this._htppClient.put<IProduct>(`${this.baseUrl}/${id}`, producto);
  }
}
