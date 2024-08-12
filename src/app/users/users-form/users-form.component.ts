import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iuser } from 'src/app/shared/model/users.interface';
import { CustomRegex } from 'src/app/shared/model/validationPattern';
import { UsersService } from 'src/app/shared/service/users.service';
import { UuidService } from 'src/app/shared/service/uuid.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  constructor(
    private _userService: UsersService,
    private _routes: ActivatedRoute,
    private _uuid: UuidService,
    private _router: Router
  ) { }

  userForm!: FormGroup;
  userId!: string;
  userObj!: Iuser;
  userRole!: string;
  isInEditMode: boolean = false;


  ngOnInit(): void {
    this.createForm();
    this.handleUserIdParams();
    this.handleQueryParamsUserRole();
  }

  createForm() {
    this.userForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.onlyText), Validators.maxLength(18), Validators.minLength(6)]),
      userImg: new FormControl(null, Validators.required),
      userRole: new FormControl(null, Validators.required),
    })
  }

  get controls() {
    return this.userForm.controls
  }

  handleUserIdParams() {
    this.userId = this._routes.snapshot.params['userId'];
    if (this.userId) {
      this.isInEditMode = true;
      this._userService.getSingleUser(this.userId).subscribe((res: Iuser) => {
        this.userObj = res
      })
      this.userForm.patchValue(this.userObj)
    }
    else {
      this.isInEditMode = false;
    }

  }

  handleQueryParamsUserRole() {
    this.userRole = this._routes.snapshot.queryParams['userRole'];
    if (this.userRole === 'buyer') {
      this.userForm.disable();
    }
    else {
      this.userForm.enable();
    }
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      let newUser = { ...this.userForm.value, userId: this._uuid.uuid() };
      this._userService.addNewUser(newUser);
    }
  }

  onUpdate() {
    if (this.userForm.valid) {
      let updatedObj = { ...this.userForm.value, userId: this.userId };
      this._userService.updateUser(updatedObj);
    }
  }


  onCancel() {
    this._router.navigate(['/users']);
  }

}
