import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.a = false;
  }

  email: string;
  password: string;
  a: boolean;

  login() {
    console.log('method called!!');

    if (!this.email || !this.password) {
      alert('Fields cannot be empty')
    }
    else {
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      re.test(this.email)

      if (re.test(this.email) == true) {


        let credentials = {
          email: this.email.toLocaleLowerCase(),
          password: this.password
        }

        this.http.post('https://brixback.herokuapp.com/auth', credentials, { responseType: 'text' }).subscribe(resp => {

          if (resp.includes('No records associated with this email')) {
            alert(resp)
          }
          else if (resp.includes('Password entered is wrong')) {
            alert(resp)
          }
          else {

            localStorage.setItem('email', this.email)
            localStorage.setItem('jwt', resp)
            const jwt = localStorage.getItem('jwt')

            console.log(jwt, 'jwt')
            this.router.navigate(['home'])

          }
        })

      }
      else {
        alert('invalid email format')
      }



    }
  }

  ngOnInit(): void {
  }

}
