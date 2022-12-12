import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../api/auth.service";
import {Credentials} from "../../../interfaces/auth";
import {Router} from "@angular/router";
import {TokenService} from "../../../api/token.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  token = '';
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  goTo(url: string) {
    this.router.navigate([url]);
  }

  logout() {
    this.authService.logout();
    this.goTo('/auth/login');
  }

  getProfile() {
    //this.
  }

}
