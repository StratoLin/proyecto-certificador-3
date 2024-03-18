import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from '../../services/usuario/usuario-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(private userService: UsuarioServiceService, private router: Router) {
    this.formLogin = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

    onSubmit(){
        this.userService.nuevoUsuario(this.formLogin.value).subscribe(
          (res) => {
            console.log(res);
            this.router.navigate(['/']);
          }
        )
        ;
    }

    login({email, password}: any){
      return this.userService.post<{token: string}>(`${this.baseUrl}/login`, {email, password}).pipe(
        tap(({token}) => {
          localStorage.setItem('userToken', token);
        })
      );
    }
}
