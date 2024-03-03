import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/producto.interface';
import { ApiProductosService } from '../../services/api-productos.service';

@Component({
  selector: 'app-pages-main',
  templateUrl: './pages-main.component.html',
  styleUrls: ['./pages-main.component.css']
})
export class PagesMainComponent implements OnInit{

  productList: IProduct[] = [];

  constructor(private _apiService: ApiProductosService) { }

  ngOnInit(): void {
    this._apiService.getAllProductos().subscribe((data: IProduct[]) => {
      this.productList = data;
    });
  }

}
