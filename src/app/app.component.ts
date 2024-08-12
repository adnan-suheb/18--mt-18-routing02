import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routing02';

  constructor(
    private _authservice: AuthService
  ) { }

  isLoginFlag: boolean = false;

  ngOnInit(): void {
    this._authservice.loginStatusSubject$.subscribe(res => {
      this.isLoginFlag = res;
      console.log(this.isLoginFlag);
    })
  }


}
