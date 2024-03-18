import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }

  upLoadFile(FormData: FormData){
    return this.http.post('http://localhost:8080/semana08/productos/upload', FormData)
  }

  getFiles(nombre: String){
    return this.http.get(`http://localhost:8080/semana08/productos/${nombre}`, {responseType: 'blob'})
  }
}
