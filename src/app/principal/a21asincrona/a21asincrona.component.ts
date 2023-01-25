import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component'
export interface DialogData {
  deporte: string;
  name: string;
}
@Component({
  selector: 'app-a21asincrona',
  templateUrl: './a21asincrona.component.html',
  styleUrls: ['./a21asincrona.component.css']
})
export class A21asincronaComponent {
  deporte: string = "";
  name: string = "";

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {name: this.name, deporte: this.deporte},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.deporte = result;
      console.log(result)
    });
  }
  
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './indextest.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
