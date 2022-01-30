import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MailComponent } from '../mail/mail.component';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private dialog: MatDialog,
  ) {
    this.role = 'Admin'
    this.getpath()
  }

  cPage: string
  role: string;

  goToPage(pageName) {
    this.router.navigateByUrl(pageName)
  }

  getpath() {
    this.cPage = this.router.url
    console.log(this.cPage);

  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '600px';
    dialogConfig.width = '500px';
    dialogConfig.data = {

    };
    this.dialog.open(MailComponent, dialogConfig);
  }


  logout() {
    localStorage.clear()
    this.router.navigate(['authentication'])
  }

}
