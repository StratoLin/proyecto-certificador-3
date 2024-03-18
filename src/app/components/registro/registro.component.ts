import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioServiceService } from '../../services/usuario/usuario-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  formReg: FormGroup;

  constructor(private userService: UsuarioServiceService, private router: Router) {
    this.formReg = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
   }

   onSubmit(){
      this.userService.nuevoUsuario(this.formReg.value).subscribe(
        (res) => {
          console.log(res);
          this.router.navigate(['/login']);
        }
      )
      ;
   }
}
