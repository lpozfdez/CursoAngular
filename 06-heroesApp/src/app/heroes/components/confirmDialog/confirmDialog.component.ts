import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-confirm-dialog',
  standalone: false,
  templateUrl: './confirmDialog.component.html',
  styleUrls: ['./confirmDialog.component.css'],
})
export class ConfirmDialogComponent {

  constructor(

    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,

  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onConfirm():void{
    this.dialogRef.close(true);
  }

 }
