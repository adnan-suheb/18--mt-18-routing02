import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';



const materialComponent = [
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatChipsModule,
  MatIconModule,
  MatDialogModule,
  MatSelectModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatListModule,
  MatDividerModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...materialComponent
  ],
  exports: [...materialComponent]
})
export class MaterialModule { }
