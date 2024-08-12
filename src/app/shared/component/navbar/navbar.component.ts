import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }
  userRole!: string;

  ngOnInit(): void {
    this.userRole = localStorage.getItem('userRole')!;
  }



  onLogOut() {
    this._authService.logOutFromApp();
  }

}
