import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsDashComponent } from './products-dash/products-dash.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductsDashComponent,
    SingleProductComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
