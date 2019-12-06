import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  propObj: any;
}

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit {
  prop: any[];

  constructor(
    public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { 
    //Obtener datos de la propiedad
    this.prop = data.propObj;
  }


  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
