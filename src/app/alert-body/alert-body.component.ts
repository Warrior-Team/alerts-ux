import { Component, OnInit, Inject } from '@angular/core';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-alert-body',
  templateUrl: './alert-body.component.html',
  styleUrls: ['./alert-body.component.less']
})
export class AlertBodyComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<AlertBodyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onClick(option) {

    this.dialogRef.close();

//TODO- ADD AN EVENT EMITTER THAT EMITS AN EVENT WITH THE CHOSEN  OPTION TO THE PARENT COMPONENT
  }

}
