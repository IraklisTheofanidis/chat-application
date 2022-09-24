import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  email = ''
  password = '';
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

  async login() {
    this.isWorking = true;
    await this.authService.signIn(this.email, this.password);
    this.isWorking = false;
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
