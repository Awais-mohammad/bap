import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) {

  }
  // http://localhost:3000/checkout

  orders
  getOrders() {
    this.http.get('https://brixback.herokuapp.com/checkout').subscribe(data => {
      this.orders = data
      console.log(data);

    })
  }

  close(param) {
    this.http.delete('https://brixback.herokuapp.com/checkout/' + param).subscribe((data: any) => {
      alert(data.deletedCount + ' record removed')
      location.reload()
    })
  }

  sendMaikTOUser() {
    let data = {
      email: this.orders.email.toLocaleLowerCase(),
      name: this.orders.name,
      template: 'custom',
      message: 'Your order with order id' + this.orders._id + ' has been closed. Thankyou for going forward with us. Happy shopping . We hope to go with you again',
      subject: 'Your order  has been closed'
    }
    this.http.post('https://brixback.herokuapp.com/mail/c_mail', data, { responseType: 'text' }).subscribe(data => {
      alert('mail sent')

    })
  }

  ngOnInit(): void {
    this.getOrders()
  }

}
