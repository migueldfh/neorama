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
export class PreviewComponentProperties implements OnInit {
  img: any;
  name: any;
  price: any;
  address: any;
  bathrooms: any;
  built_size: any;
  parking: any;
  contact: boolean;

  constructor(
    public dialogRef: MatDialogRef<PreviewComponentProperties>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { 
    //Obtener datos de la propiedad
    this.img = data.propObj['images'];
    this.name = data.propObj['ad_description'];
    this.price = data.propObj['price'];
    this.built_size = data.propObj['built_size'];
    this.bathrooms = data.propObj['bathrooms'];
    this.parking = data.propObj['parking'];
    this.address = data.propObj['delegation'];
    this.contact = false;
  }


  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  getContact(){
    this.contact = true;
  }

}
