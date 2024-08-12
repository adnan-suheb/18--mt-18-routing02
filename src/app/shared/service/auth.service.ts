import { Injectable } from '@angular/core';
import { Ilogin } from '../model/login.const';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router,
    private _snackbar: SnackbarService
  ) { }

  userLoginStatus: boolean = false;
  loginStatusSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);


  isAuthenticated() {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        if (localStorage.getItem('token')) {
          this.userLoginStatus = true;
        }
        else {
          this.userLoginStatus = false;
          this._router.navigate(['']);
        }

        this.loginStatusSubject$.next(this.userLoginStatus);
        resolve(this.userLoginStatus);
      }, 500);
    })
  }

  loginToApp(obj: Ilogin) {
    if (obj.email === 'john@gmail.com' && obj.password === 'zaq1ZAQ!') {
      localStorage.setItem('userRole', 'buyer');
      this.userLoginStatus = true;
      localStorage.setItem('token', 'JWT token');
      this._router.navigate(['/home'])
    } else if (obj.email === 'june@gmail.com' && obj.password === 'zaq1ZAQ!') {
      localStorage.setItem('userRole', 'admin');
      this.userLoginStatus = true;
      localStorage.setItem('token', 'JWT token');
      this._router.navigate(['/home'])
    } else if (obj.email === 'may@gmail.com' && obj.password === 'zaq1ZAQ!') {
      localStorage.setItem('userRole', 'superAdmin');
      this.userLoginStatus = true;
      localStorage.setItem('token', 'JWT token');
      this._router.navigate(['/home'])
    }
    else {
      this._snackbar.openSnackbar('Invalid Email or Password!!!');
    }
  }

  logOutFromApp() {
    localStorage.removeItem('userRole');
    localStorage.removeItem('token');
    this.userLoginStatus = false;
    this.loginStatusSubject$.next(this.userLoginStatus);
    this._router.navigate([''])
  }
}
