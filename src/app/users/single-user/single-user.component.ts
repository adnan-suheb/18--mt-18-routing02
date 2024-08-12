import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users.interface';
import { UsersService } from 'src/app/shared/service/users.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.scss']
})
export class SingleUserComponent implements OnInit {

  constructor(
    private _routes: ActivatedRoute,
    private _userService: UsersService,
    private _router: Router
  ) { }

  userId!: string;
  userObj!: Iuser;

  ngOnInit(): void {
    this.handleUserIdParas();
  }

  handleUserIdParas() {
    this._routes.params.subscribe(res => {
      if (res) {
        this.userId = res['userId'];
        console.log(this.userId);
      }
      if (this.userId) {
        this._userService.getSingleUser(this.userId).subscribe((res: Iuser) => {
          this.userObj = res;
        })
      }

    })
  }

  onEdit() {
    this._router.navigate(['editUser'], {
      relativeTo: this._routes,
      queryParamsHandling: 'preserve'
    })
  }

  onRemove(id: string) {
    this._userService.removeUser(id)
  }

}
