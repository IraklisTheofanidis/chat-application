import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [
    './register-page.component.scss',
    '../login-page/login-page.component.scss',
  ],
})
export class RegisterPageComponent implements OnInit {

  email = ''
  password = '';
  nickname = '';
  isWorking = false;
  constructor() { }

  ngOnInit(): void {
  }

  register() { }

}
