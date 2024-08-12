import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from '../../model/validationPattern';
import { AuthService } from '../../service/auth.service';
import { Ilogin } from '../../model/login.const';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private _authService: AuthService
  ) { }

  loginForm!: FormGroup;
  passType: boolean = false;


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.email)]),
      password: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.password)])
    })
  }

  get controls() {
    return this.loginForm.controls;
  }

  onFormSubmit() {
    let loginObj = this.loginForm.value as Ilogin;
    this._authService.loginToApp(loginObj)
  }

  togglePassType() {
    this.passType = !this.passType
  }



}
