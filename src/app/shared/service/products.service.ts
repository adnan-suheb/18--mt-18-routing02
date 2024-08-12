import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import { DialogService } from './dialog.service';
import { Iproduct } from '../model/product.interface';
import { productsData } from '../model/product.const';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private _router: Router,
    private _snackbar: SnackbarService,
    private _dialog: DialogService
  ) { }

  productsArr: Iproduct[] = productsData;


  fetchAllProducts(): Observable<Iproduct[]> {
    return of(this.productsArr)
  }

  getSingleProduct(id: string): Observable<Iproduct> {
    return of(this.productsArr.find(prod => prod.prodId === id)!)
  }

  addNewProduct(obj: Iproduct) {
    this.productsArr.push(obj);
    this._snackbar.openSnackbar(`New Product ${obj.brand} ${obj.model} added successfully!!!`);
    this._router.navigate(['/products'])
  }
  updateProduct(updatedObj: Iproduct) {
    let index = this.productsArr.findIndex(prod => prod.prodId === updatedObj.prodId);
    this.productsArr[index] = updatedObj;
    this._snackbar.openSnackbar(` ${updatedObj.brand} ${updatedObj.model}  updated successfully!!!`);
    this._router.navigate(['/products'])
  }

  removeProduct(id: string) {
    let index = this.productsArr.findIndex(prod => prod.prodId === id);
    let obj = this.productsArr[index];
    this._dialog.openDialog('Confirmation', `Are you sure, You want to remove ${obj.brand} ${obj.model}?`).subscribe(res => {
      if (res) {
        this.productsArr.splice(index, 1)
        this._snackbar.openSnackbar(`${obj.brand} ${obj.model} removed successfully!!!`);
        this._router.navigate(['/products'])
      }
    })

  }
}
