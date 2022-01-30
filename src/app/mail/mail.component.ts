import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { send } from 'process';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  constructor(
    private dialoge: MatDialog,
    private http: HttpClient,

  ) { }

  name: string;
  email: string;
  message: string;
  subject: string;

  validate() {
    if (!this.name || !this.email || !this.message || !this.subject) {
      alert('fields cannot be empty')
    }
    else {
      this.send()
    }
  }

  send() {

    let data = {
      email: this.email.toLocaleLowerCase(),
      name: this.name,
      template: 'custom',
      message: this.message,
      subject: this.subject
    }
    this.http.post('https://brixback.herokuapp.com/mail/c_mail', data, { responseType: 'text' }).subscribe(data => {
      alert('mail sent')
      this.close()
    })
  }

  ngOnInit(): void {
  }

  close() {
    this.dialoge.closeAll()
  }

}
