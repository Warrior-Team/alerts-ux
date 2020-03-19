import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-body',
  templateUrl: './alert-body.component.html',
  styleUrls: ['./alert-body.component.less']
})
export class AlertBodyComponent implements OnInit {

  title='חסימת הרשאה';
  message='פעולתך לא נשמרה עקב בעייה במאגר';
  image;
  option1='פנה לתמיכה';
  option2='הבנתי';
  constructor( private dialogRef: MatDialogRef<AlertBodyComponent>) { }

  ngOnInit(): void {
  }

  close(option) {

    this.dialogRef.close();

//TODO- ADD AN EVENT EMITTER THAT EMITS AN EVENT WITH THE CHOSEN  OPTION TO THE PARENT COMPONENT
  }

}
