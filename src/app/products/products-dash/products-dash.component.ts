import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-products-dash',
  templateUrl: './products-dash.component.html',
  styleUrls: ['./products-dash.component.scss']
})
export class ProductsDashComponent implements OnInit {

  constructor(
    private _productService: ProductsService,
    private _router: Router
  ) { }

  productArr: Iproduct[] = [];

  ngOnInit(): void {
    this.getAllProducts();
    this.getFirstObj();
  }

  getAllProducts() {
    this._productService.fetchAllProducts().subscribe((res: Iproduct[]) => {
      this.productArr = res
    })
  }

  getFirstObj() {
    this._router.navigate(['products', this.productArr[0].prodId], {
      queryParams: { canReturn: this.productArr[0].canReturn },
      queryParamsHandling: 'merge'
    })
  }

}
