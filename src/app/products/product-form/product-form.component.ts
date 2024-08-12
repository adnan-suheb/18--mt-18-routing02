import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/product.interface';
import { CustomRegex } from 'src/app/shared/model/validationPattern';
import { ProductsService } from 'src/app/shared/service/products.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private _prodService: ProductsService,
    private _routes: ActivatedRoute,
    private _uuid: UuidService,
    private _router: Router
  ) { }

  productForm!: FormGroup;
  prodId!: string;
  prodObj!: Iproduct;
  canReturn!: string;
  isInEditMode: boolean = false;


  ngOnInit(): void {
    this.createForm();
    this.handleProdIdParams();
    this.handleQueryParamsCanReturn();
  }

  createForm() {
    this.productForm = new FormGroup({
      brand: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      image: new FormControl(null, Validators.required),
      canReturn: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.onlyNumber)]),
    })
  }

  get controls() {
    return this.productForm.controls
  }

  handleProdIdParams() {
    this.prodId = this._routes.snapshot.params['prodId'];
    if (this.prodId) {
      this.isInEditMode = true;
      this._prodService.getSingleProduct(this.prodId).subscribe((res: Iproduct) => {
        this.prodObj = res
      })
      this.productForm.patchValue(this.prodObj)
    }
    else {
      this.isInEditMode = false;
    }

  }

  handleQueryParamsCanReturn() {
    this.canReturn = this._routes.snapshot.queryParams['canReturn'];
    if (this.canReturn === '0') {
      this.productForm.disable();
    }
    else {
      this.productForm.enable();
    }
  }

  onFormSubmit() {
    if (this.productForm.valid) {
      let newProduct = { ...this.productForm.value, prodId: this._uuid.uuid() };
      this._prodService.addNewProduct(newProduct);
    }
  }

  onUpdate() {
    if (this.productForm.valid) {
      let updatedObj = { ...this.productForm.value, prodId: this.prodId };
      this._prodService.updateProduct(updatedObj);
    }
  }


  onCancel() {
    this._router.navigate(['/products']);
  }

}
