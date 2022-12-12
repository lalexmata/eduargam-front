import { Component, OnInit } from '@angular/core';
import {Credentials} from "../../../interfaces/auth";
import {AuthService} from "../../../api/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import Swall from "sweetalert2";
import {TokenService} from "../../../api/token.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    const token =this.tokenService.getToken();
    if(token) {
      this.goTo('/admin');
    }
  }
  goTo(url: string) {
    this.router.navigate([url]);
  }

  private buildForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }
  login(){
    this.form.markAllAsTouched();
    if(this.form.invalid) {return}
    this.authService.login(this.form.value)
      .subscribe(( res) => {
        this.goTo('/admin')
      }, error => {
        Swall.fire({
          icon: 'error',
          title: 'Usuario o contraseña incorrecto',
          confirmButtonText: 'Ok',
        })
      });
  }

  get emailField() {
    return this.form.get('email');
  }

  get passwordField() {
    return this.form.get('password');
  }

}
