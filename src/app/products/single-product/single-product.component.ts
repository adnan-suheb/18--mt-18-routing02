import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product.interface';
import { ProductsService } from 'src/app/shared/service/products.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  constructor(
    private _routes: ActivatedRoute,
    private _prodService: ProductsService,
    private _router: Router
  ) { }

  prodId!: string;
  prodObj!: Iproduct;

  ngOnInit(): void {
    this.handleProdIdParas();
  }

  handleProdIdParas() {
    this._routes.params.subscribe(res => {
      if (res) {
        this.prodId = res['prodId'];
        console.log(this.prodId);
      }
      if (this.prodId) {
        this._prodService.getSingleProduct(this.prodId).subscribe((res: Iproduct) => {
          this.prodObj = res;
        })
      }

    })
  }

  onEdit() {
    this._router.navigate(['editProduct'], {
      relativeTo: this._routes,
      queryParamsHandling: 'preserve'
    })
  }

  onRemove(id: string) {
    this._prodService.removeProduct(id)
  }


}
