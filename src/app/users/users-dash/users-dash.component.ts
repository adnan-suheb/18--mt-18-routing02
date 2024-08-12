import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users.interface';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-users-dash',
  templateUrl: './users-dash.component.html',
  styleUrls: ['./users-dash.component.scss']
})
export class UsersDashComponent implements OnInit {

  constructor(
    private _userService: UsersService,
    private _router: Router
  ) { }

  usersArr: Iuser[] = [];

  ngOnInit(): void {
    this.getAllUsers();
    this.getFirstObj();
  }

  getAllUsers() {
    this._userService.fetchAllUsers().subscribe((res: Iuser[]) => {
      this.usersArr = res
    })
  }

  getFirstObj() {
    this._router.navigate(['users', this.usersArr[0].userId], {
      queryParams: { userRole: this.usersArr[0].userRole },
      queryParamsHandling: 'merge'
    })
  }

}
