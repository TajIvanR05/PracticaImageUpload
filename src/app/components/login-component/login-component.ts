import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../services/service.auth';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {

  constructor(
    private _authService : AuthService,
    private _route : Router,
  ){}

  @ViewChild("username") username! : ElementRef;
  @ViewChild("password") password! : ElementRef;

  login() : void {
    let user : User = new User(this.username.nativeElement.value, this.password.nativeElement.value);
    this._authService.getTokenAsync(user).then(t => {
      window.localStorage.setItem("myToken", `Bearer ${t}`);
      this._route.navigate(['/'])
    })
  }

  ngOnInit(): void {
    if(window.localStorage.getItem("myToken") !== null)
      this._route.navigate(['/'])
  }
}
