import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }

  users: any;

  getProducts() {
    this.http.get('https://brixback.herokuapp.com/users').subscribe(Data => {

      console.log(Data);
      this.users = Data
    })
  }

}
