import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/producto.interface';
import { MediaService } from 'src/app/services/media/media.service';
import { ApiProductosService } from 'src/app/services/productos/api-productos.service';

@Component({
  selector: 'app-crud-productos',
  templateUrl: './crud-productos.component.html',
  styleUrls: ['./crud-productos.component.css']
})
export class CrudProductosComponent {

  productoForm: FormGroup;
  url?: String;

  constructor(private http: ApiProductosService, private fb: FormBuilder, private media: MediaService) {

    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['',Validators.required],
      cantidad: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required]

    });

   }


   upLoad(event: any){
    const file = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append('file', file);

      this.media.upLoadFile(formData).subscribe(
        (res) => {
          console.log('res: ', res);
          this.url = res.toString();
        }
      );
    }
    
   }

  agregarProducto(){
    const producto: IProduct = {
      nombre: this.productoForm.get('nombre')?.value,
      precio: this.productoForm.get('precio')?.value,
      cantidad: this.productoForm.get('cantidad')?.value,
      descripcion: this.productoForm.get('descripcion')?.value,
      imagen: this.url?.toString() || ''
    }

    this.http.nuevoProducto(producto).subscribe(
      (res) => {
        console.log(res);
      }
    );
  }

}
