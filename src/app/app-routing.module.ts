import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { UsersDashComponent } from './users/users-dash/users-dash.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { SingleUserComponent } from './users/single-user/single-user.component';
import { ProductsDashComponent } from './products/products-dash/products-dash.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { SingleProductComponent } from './products/single-product/single-product.component';
import { FairsDashComponent } from './fairs/fairs-dash/fairs-dash.component';
import { FairsDetailsComponent } from './fairs/fairs-details/fairs-details.component';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { AuthComponent } from './shared/component/auth/auth.component';
import { AuthGuard } from './shared/service/auth.guard';
import { UserRoleGuard } from './shared/service/user-role.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: ['admin', 'buyer', 'superAdmin']
    }
  },
  {
    path: 'users',
    component: UsersDashComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: ['admin', 'superAdmin']
    },
    children: [
      {
        path: 'addUser',
        component: UsersFormComponent
      },
      {
        path: ':userId',
        component: SingleUserComponent
      },
      {
        path: ':userId/editUser',
        component: UsersFormComponent
      }
    ]
  },
  {
    path: 'products',
    component: ProductsDashComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: ['admin', 'buyer', 'superAdmin']
    },
    children: [
      {
        path: 'addProduct',
        component: ProductFormComponent
      },
      {
        path: ':prodId',
        component: SingleProductComponent
      },
      {
        path: ':prodId/editProduct',
        component: ProductFormComponent
      }
    ]
  },
  {
    path: 'fairs',
    component: FairsDashComponent,
    canActivate: [AuthGuard, UserRoleGuard],
    data: {
      userRole: ['superAdmin']
    },
    children: [
      {
        path: ':fairId',
        component: FairsDetailsComponent
      }
    ]
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: {
      msg: 'Page Not Found'
    }
  }
  , {
    path: '**',
    redirectTo: 'page-not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

