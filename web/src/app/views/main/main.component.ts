import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  sub?: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sub = this.authService.isAuthenticated().subscribe(user => {
      if (!user) {
        this.router.navigate(['/']);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
