import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, msg: string }

  ) { }

  ngOnInit(): void {
  }

  onConfirm() {
    this._dialogRef.close(true);
  }
  onCancel() {
    this._dialogRef.close(false);
  }

}
