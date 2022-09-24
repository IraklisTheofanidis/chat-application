import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [
    './register-page.component.scss',
    '../login-page/login-page.component.scss',
  ],
})
export class RegisterPageComponent implements OnInit, OnDestroy {

  email = ''
  password = '';
  nickname = '';
  isWorking = false;
  sub?: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.sub = this.authService.isAuthenticated().subscribe(user => {
      if (user) {
        this.router.navigate(['main']);
      }
    });
  }

  async register() {
    this.isWorking = true;
    await this.authService.signUp(this.email, this.password, this.nickname);
    this.isWorking = false;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
