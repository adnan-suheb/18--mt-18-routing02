import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {

  constructor(
    private _router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let userRoleFromLS = localStorage.getItem('userRole')!;
    let userRoleArr: string[] = route.data['userRole'];
    if (userRoleArr.includes(userRoleFromLS)) {
      return true;
    } else {
      return this._router.createUrlTree(['home'])
    }

    // return true;
  }

}
