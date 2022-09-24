import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

  authenticated?: boolean;
  sub?: Subscription;
  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.sub = this.authService.isAuthenticated().subscribe(user => {
      this.authenticated = !!user ?? false;
    });
  }

  logout() {
    this.authService.signOut();
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
