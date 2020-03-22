import { Component } from '@angular/core';
import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AlertBodyComponent } from './alert-body/alert-body.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent  {  
  constructor(private dialog: MatDialog) {}

  mockData={
    title: 'חסימת הרשאה',
    message: 'אינך מורשה לבצע כניסה למערכת',
    image: '',
    option1: 'פנה לתמיכה',
    option2: 'הבנתי'
  }

  openDialog() {
      let dialogConfig = new MatDialogConfig();
      dialogConfig={
        disableClose: true,
        panelClass: 'dialog',
        data: this.mockData
      }
      this.dialog.open(AlertBodyComponent, dialogConfig);
 }
}

