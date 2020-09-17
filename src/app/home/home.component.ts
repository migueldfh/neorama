import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PreviewComponent } from './preview/preview.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { UserServicesService } from '../../providers/user-api/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  selected: boolean;
  i;
  education_level;
  exam_title;
  gender;
  degreeTitleList = [];
  properties: any = [];
  propertiesArr: any = [];
  foods = [
    {viewValue: 'Casas'},
    {viewValue: 'Departamento'},
    {viewValue: 'Terreno/Lote'},
    {viewValue: 'Local comercial'},
    {viewValue: 'Oficina'},
    {viewValue: 'Bodega'}
  ];
  inmueble = [
    {value: 'steak-0', viewValue: 'Casas'},
    {value: 'pizza-1', viewValue: 'Departamentos'},
    {value: 'tacos-2', viewValue: 'Terrenos'}
  ];
  operation = [
    {value: 'steak-0', viewValue: 'Renta'},
    {value: 'pizza-1', viewValue: 'Compra'},
    {value: 'tacos-2', viewValue: 'Renta temporal/Vacacional'}
  ];
  selected1: boolean;
  selected2: boolean;
  selected3: boolean;
  selected4: boolean;
  selected5: boolean;
  selectedFilters: {
  city: string,
  inmueble: string,
  bath: number,
  beds: number,
  parking: number,
  operation: string,
  superficie: string,
  precio: string, 
  antiguedad: string
  } = {
    city: null,
    inmueble: null,
    bath: null,
    beds: null,
    parking: null,
    operation: null,
    superficie: null,
    precio: null,
    antiguedad: null
  }
  locationSearch: any;

  constructor(
    public dialog: MatDialog,
    public userApi: UserServicesService,
    private router: Router
  ) { 
    this.selected1 = false;
    this.selected2 = false;
    this.selected3 = false;
    this.selected4 = false;
    this.selected5 = false;
  }

  ngOnInit() {
    this.getProperties();
  }

  getProperties(){
    this.userApi.propiedades().subscribe(resp=>{
      this.properties = resp;
      console.log("props: ", this.properties);
      // if(this.properties.length <= 6){
      //   this.propertiesArr = resp;
      // }
    });
  }

  search(x){
    // console.log("search: ", x);
    this.selectedFilters.city = x.location;
    this.userApi.search(this.selectedFilters).subscribe(resp=>{
      console.log("response of main search: ", resp);
      this.router.navigate(["/properties"]);
    });
  }

  filterChanged(value){
    this.selectedFilters.inmueble = value;
    
    this.userApi.search(this.selectedFilters).subscribe((resp)=>{
      console.log("busqueda?? ", resp);
    });
  }

  status(i){
    if(i == 1){
      this.selected1 = true;
      this.selected2 = false;
      this.selected3 = false;
      this.selected4 = false;
      this.selected5 = false;
      this.selectedFilters.operation = 'comprar';
      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 2){
      this.selected1 = false;
      this.selected2 = true;
      this.selected3 = false;
      this.selected4 = false;
      this.selected5 = false;
      this.selectedFilters.operation = 'rentar';
      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 3){
      this.selected1 = false;
      this.selected2 = false;
      this.selected3 = true;
      this.selected4 = false;
      this.selected5 = false;
      this.selectedFilters.operation = 'desarrollos';
      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 4){
      this.selected1 = false;
      this.selected2 = false;
      this.selected3 = false;
      this.selected4 = true;
      this.selected5 = false;
      this.selectedFilters.operation = 'comercial';
      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 5){
      this.selected1 = false;
      this.selected2 = false;
      this.selected3 = false;
      this.selected4 = false;
      this.selected5 = true;
      this.selectedFilters.operation = 'temporal';
      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
  }

  preview(prop){
    const dialogRef = this.dialog.open(PreviewComponent, {
      width: '30%',
      height: '85vh',
      data: {
        propObj: prop
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //Nothing here
    });
  }
}
