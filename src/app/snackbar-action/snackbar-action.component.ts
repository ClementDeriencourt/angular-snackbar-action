import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar-action',
  templateUrl: './snackbar-action.component.html',
  styleUrls: ['./snackbar-action.component.css']
})
export class SnackbarActionComponent {

  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
