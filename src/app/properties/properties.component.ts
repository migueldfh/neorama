import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { PreviewComponentProperties } from './preview/preview.component';
import { MatDialog } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  selected: boolean;
  i;
  education_level;
  exam_title;
  gender;
  degreeTitleList = [];
  ext: any = [
    {
      full: "Monterrey"
    },
    {
      full: "San Pedro Garza García"
    },
    {
      full: "Santa Catarina"
    },
    {
      full: "San Nicolás de los Garza"
    },
    {
      full: "Guadalupe"
    },
    {
      full: "Santiago"
    },
    {
      full: "Escobedo"
    },
    {
      full: "Apodaca"
    },
    {
      full: "García"
    },
    {
      full: "Cumbres"
    }
  ];
  properties: any = [];
  selectedFilters: {
  city: string,
  type: string,
  bath: number,
  beds: number,
  parking: number,
  operation: string,
  build: string,
  price: string, 
  antique: string
  } = {
  city: null,
  type: null,
  bath: null,
  beds: null,
  parking: null,
  operation: null,
  build: null,
  price: null,
  antique: null
  }
  val1: boolean;
  val2: boolean;
  val3: boolean;
  valh1: boolean;
  valh2: boolean;
  valh3: boolean;
  park1: boolean;
  park2: boolean;
  park3: boolean;
  bathrooms: number;
  parkinSize: number;
  displayParameter: any;
  resultado=null;
  resultadoInmueble=null;
  resultadoPrecio=null;
  resultadoAnti=null;
  resultadoSuperficie=null;
  operacionSeleccionada: string;
  operacionInmueble: string;
  operacionAnti: string;
  operacionPrecio: string;
  operacionSuperficie: string;
  location_control = new FormControl();
  citySelect: boolean;
  inmuebleSelect: boolean;
  superficieSelect: boolean;
  antiSelect: boolean;
  precioSelect: boolean;
  bathsSelect: boolean;
  parksSelect: boolean;
  operationSelect: boolean;
  bethsSelect: boolean;
  mobileActive: boolean = false;

  constructor(
    public userApi: UserServicesService,
    public dialog: MatDialog
  ) { 
    this.userApi.propiedades().subscribe(resp=>{
      this.properties = resp;
    });
    // this.mobileActive = false;
    this.citySelect = false;
    this.inmuebleSelect = false;
    this.superficieSelect = false;
    this.antiSelect = false;
    this.precioSelect = false;
    this.bathsSelect = false;
    this.bethsSelect = false;
    this.parksSelect = false;
    this.operationSelect = false;
    this.selected = false;
  }

  showFilters(){
    this.mobileActive = !this.mobileActive;
    console.log("mobileActive: ", this.mobileActive);
  }

  ngOnInit() {
    // this.userApi.propiedades().subscribe(resp=>{
    //   this.properties = resp;
    // });
  }
  
  filter(modify){
    let body = {
      city: modify,
      operation: '',
      type: '',
      bath: '',
      parking: ''
    }

    // this.userApi.search(body).subscribe(resp=>{
    //   console.log("resp filter: ", resp);
    // });
  }

  filterChanged(value){
    this.selectedFilters.city = value;
    this.citySelect = true;
    // this.order.type=value;
    console.log("localidad= ", value);
    this.userApi.search(this.selectedFilters).subscribe((resp)=>{
      console.log("busqueda?? ", resp);
    });
  }

  operar() {
    switch (this.operacionSeleccionada) {
      case 'compra' : this.resultado = 'compra';
        break;
      case 'renta' : this.resultado = 'renta';
        break;
      case 'vacacional' : this.resultado = 'vacacional';
        break;
      case 'preventa' : this.resultado = 'preventa';
        break;
    }
    this.selectedFilters.operation = this.operacionSeleccionada;
    this.operationSelect = true;
    
    this.userApi.search(this.selectedFilters).subscribe((resp)=>{
      console.log("busqueda?? ", resp);
    });
  }

  operarInmueble() {
    switch (this.operacionInmueble) {
      case 'casa' : this.resultadoInmueble = 'compra';
        break;
      case 'departamento' : this.resultadoInmueble = 'renta';
        break;
      case 'terreno' : this.resultadoInmueble = 'vacacional';
        break;
      case 'local' : this.resultadoInmueble = 'preventa';
        break;
    }
    this.inmuebleSelect = true;
    this.selectedFilters.type = this.operacionInmueble;

    this.userApi.search(this.selectedFilters).subscribe((resp)=>{
      console.log("busqueda?? ", resp);
    });
  }

  superficie() {
    switch (this.operacionSuperficie) {
      case 'construccion' : this.resultadoSuperficie = 'construccion';
        break;
      case 'terreno' : this.resultadoSuperficie = 'terreno';
        break;
    }
    this.superficieSelect = true;
    this.selectedFilters.build = this.operacionSuperficie;

    this.userApi.search(this.selectedFilters).subscribe((resp)=>{
      console.log("busqueda?? ", resp);
    });
  }

  precio() {
    switch (this.operacionPrecio) {
      case 'pesos' : this.resultadoPrecio = 'pesos';
        break;
      case 'dolares' : this.resultadoPrecio = 'dolares';
        break;
    }
    this.precioSelect = true;
    this.selectedFilters.price = this.operacionPrecio;

    this.userApi.search(this.selectedFilters).subscribe((resp)=>{
      console.log("busqueda?? ", resp);
    });
  }

  antiguedad() {
    switch (this.operacionAnti) {
      case 'estrenar' : this.resultadoAnti = 'estrenar';
        break;
      case 'construccion' : this.resultadoAnti = 'construccion';
        break;
      case '5años' : this.resultadoAnti = '5años';
        break;
      case '5-10' : this.resultadoAnti = '5-10';
        break;
      case '10-20' : this.resultadoAnti = '10-20';
        break;
      case '20-50' : this.resultadoAnti = '20-50';
        break;
      case '50+' : this.resultadoAnti = '50+';
        break;
    }
    this.antiSelect = true;
    this.selectedFilters.antique = this.operacionAnti;

    this.userApi.search(this.selectedFilters).subscribe((resp)=>{
      console.log("busqueda?? ", resp);
    });
  }

  bath(i){
    this.bathsSelect = true;
    if(i == 1){
      this.val1 = true;
      this.val2 = false;
      this.val3 = false;
      this.bathrooms = 1;
      this.selectedFilters.bath = 1;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 2){
      this.val1 = false;
      this.val2 = true;
      this.val3 = false;
      this.bathrooms = 2;
      this.selectedFilters.bath = 2;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 3){
      this.val1 = false;
      this.val2 = false;
      this.val3 = true;
      this.bathrooms = 3;
      this.selectedFilters.bath = 3;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
  }

  beth(i){
    this.bethsSelect = true;
    if(i == 1){
      this.valh1 = true;
      this.valh2 = false;
      this.valh3 = false;
      this.bathrooms = 1;
      this.selectedFilters.beds = 1;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 2){
      this.valh1 = false;
      this.valh2 = true;
      this.valh3 = false;
      this.bathrooms = 2;
      this.selectedFilters.beds = 2;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 3){
      this.valh1 = false;
      this.valh2 = false;
      this.valh3 = true;
      this.bathrooms = 3;
      this.selectedFilters.beds = 3;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
  }
  
  parking(i){
    this.parksSelect = true;
    if(i == 1){
      this.park1 = true;
      this.park2 = false;
      this.park3 = false;
      this.parkinSize = 1;
      this.selectedFilters.parking = 1;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 2){
      this.park1 = false;
      this.park2 = true;
      this.park3 = false;
      this.parkinSize = 2;
      this.selectedFilters.parking = 2;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
    if(i == 3){
      this.park1 = false;
      this.park2 = false;
      this.park3 = true;
      this.parkinSize = 3;
      this.selectedFilters.parking = 3;

      this.userApi.search(this.selectedFilters).subscribe((resp)=>{
        console.log("busqueda?? ", resp);
      });
    }
  }

  deleteFilter(i){
    if(i == 'city'){
      this.citySelect = false;
    }
    if(i == 'operation'){
      this.operationSelect = false;
    }
    if(i == 'bath'){
      this.bathsSelect = false;
    }
    if(i == 'beth'){
      this.bethsSelect = false;
    }
    if(i == 'park'){
      this.parksSelect = false;
    }
    if(i == 'inmueble'){
      this.inmuebleSelect = false;
    }
  }

  status(i){
    console.log("ch?", this.selected);
    console.log("index", i);
    const id = i;
    this.i = id;
    if(this.selected){
      this.selected = false;
    }else{
      if(id != 0){
        this.selected = true;
      }
      this.selected = true;
    }
  }

  getContact(prop){
    const dialogRef = this.dialog.open(PreviewComponentProperties, {
      width: '30%',
      height: '85vh',
      data: {
        propObj: prop
      }
    });
  }
}
