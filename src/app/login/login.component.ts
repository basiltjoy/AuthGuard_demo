import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = '0;'
  constructor(private router: Router) { }

  ngOnInit() {
    
  }

  AuthGuardCheck(){
    localStorage.setItem('Auth user', this.user)
    this.router.navigateByUrl("/home");
  }
}
