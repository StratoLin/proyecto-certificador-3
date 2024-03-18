import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  private baseUrl = 'http://localhost:8080/semana08/personas';

  constructor(private http: HttpClient) { }

  getAllUsuarios(){
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.baseUrl}`, { headers });
  }

  getUsuarioById(id: number){
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  nuevoUsuario(usuario: any){
    return this.http.post(`${this.baseUrl}`, {...usuario});
  }

  eliminarUsuario(id: number){
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  actualizarUsuario(id: number, usuario: any){
    return this.http.put(`${this.baseUrl}/${id}`, usuario);
  }

  login({email, password}: any){
    return this.http.post<{token: string}>(`${this.baseUrl}/login`, {email, password}).pipe(
      tap(({token}) => {
        localStorage.setItem('userToken', token);
      })
    );
  }

  logOut(){
    return this.http.get(`${this.baseUrl}/logout`);
  }

}
