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


  openDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.panelClass='dialog';
      this.dialog.open(AlertBodyComponent, dialogConfig);
 }
}
