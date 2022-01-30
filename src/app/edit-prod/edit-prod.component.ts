import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-prod',
  templateUrl: './edit-prod.component.html',
  styleUrls: ['./edit-prod.component.scss']
})
export class EditProdComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    private http: HttpClient

  ) {
    console.log(data.prod);
    this.quantity = data.prod.quantity
    this.price = data.prod.price
    this.name = data.prod.name
    this.description = data.prod.description
  }

  quantity;
  price;
  name;
  description;

  close() {
    this.dialog.closeAll()
  }

  update() {
    let prodData = {
      name: this.name,
      quantity: this.quantity,
      price: this.price,
      description: this.description
    }
    this.close()
    alert('updated')
    return this.http.put('https://brixback.herokuapp.com/products/' + this.data.prod._id, prodData)
  }

  ngOnInit(): void {
  }

}
