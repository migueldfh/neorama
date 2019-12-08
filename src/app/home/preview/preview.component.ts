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
  img: any;
  name: any;
  price: any;
  address: any;

  constructor(
    public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { 
    //Obtener datos de la propiedad
    this.img = data.propObj['img'];
    this.name = data.propObj['name'];
    this.price = data.propObj['price'];
    this.address = data.propObj['address'];
  }


  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
