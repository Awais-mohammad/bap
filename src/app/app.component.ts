import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bap';
  constructor(
    private router: Router
  ) {
    this.checkLogin()
  }

  checkLogin() {
    const token = JSON.stringify(localStorage.getItem('jwt'))
    if (!token) {
      this.router.navigate(['authentication'])
      alert('Sign in to continue')
    }
  }
}
