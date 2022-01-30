import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditProdComponent } from '../edit-prod/edit-prod.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private http: HttpClient,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.getProducts()
  }
  add() {
    window.location.href = "https://brixtonbest.se/404"

  }
  prods: any;

  getProducts() {
    this.http.get('https://brixback.herokuapp.com/products').subscribe(Data => {

      console.log(Data);
      this.prods = Data
    })
  }
  // http://localhost:3000/products

  viewProd(prod: any) {
    console.log(prod);
    const dialog = new MatDialogConfig();
    dialog.disableClose = true;
    dialog.autoFocus = true;
    dialog.height = '700px';
    dialog.width = '920px';
    dialog.data = {
      prod: prod,
    };
    const dialogRef = this.dialog.open(EditProdComponent, dialog);
  }


}
