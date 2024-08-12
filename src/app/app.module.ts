import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/component/home/home.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { DialogComponent } from './shared/component/dialog/dialog.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { FairsModule } from './fairs/fairs.module';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DialogComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    UsersModule,
    ProductsModule,
    FairsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
