import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/producto.interface';
import { ApiProductosService } from 'src/app/services/api-productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit{

  producto?: IProduct;
  

  constructor(
    private _route: ActivatedRoute,
    private _apiService: ApiProductosService
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      this._apiService.getProductoById(Number(params['id'])).subscribe((data: IProduct) => {
        this.producto = data;
      });
    });
  }

}
