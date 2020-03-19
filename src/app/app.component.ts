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
    message: 'פעולתך לא נשמרה עקב בעייה במאגר',
    image: '',
    option1: 'פנה לתמיכה',
    option2: 'הבנתי'
  }
  
  openDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.panelClass='dialog';
      dialogConfig.data=this.mockData;
      this.dialog.open(AlertBodyComponent, dialogConfig);
 }
}
