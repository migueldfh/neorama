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
  description: any;
  price: any;
  address: any;
  bathrooms: any;
  built_size: any;
  total_built: any;
  parking: any;
  contact: boolean;
  currency_type: any;
  consultor_name: any;
  consultor_phone: any;
  message: string;

  constructor(
    public dialogRef: MatDialogRef<PreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { 
    //Obtener datos de la propiedad
    this.img = data.propObj['images'];
    this.name = data.propObj['name'];
    this.description = data.propObj['ad_description'];
    this.price = data.propObj['price'];
    this.built_size = data.propObj['built_size'];
    this.total_built = data.propObj['total_built'];
    this.bathrooms = data.propObj['bathrooms'];
    this.parking = data.propObj['parking'];
    this.address = data.propObj['delegation'];
    this.consultor_name = data.propObj['consultor'];
    this.consultor_phone = 81248940;
    this.currency_type = data.propObj['currency_type'];
    this.contact = false;
    this.message = "Hola, me interesa este inmueble que vi en su página web y quiero que me contacten. Gracias.";
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
