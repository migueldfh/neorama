import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { PreviewComponentSearch } from '../search-properties/preview/preview.component';
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
  inmueble: string,
  baths: string,
  beths: string,
  parks: string,
  operation: string,
  superficie: string,
  precio: string, 
  antiguedad: string
  } = {
    city: '',
    inmueble: '',
    baths: '',
    beths: '',
    parks: '',
    operation: '',
    superficie: '',
    precio: '',
    antiguedad: ''
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
  constructor(
    public userApi: UserServicesService,
    public dialog: MatDialog
  ) { 
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

  ngOnInit() {
    this.userApi.propiedades().subscribe(resp=>{
      this.properties = resp;
    });
    console.log("change?? ", this.selectedFilters);
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
    this.userApi.search(value).subscribe((resp)=>{
      console.log("busqueda?? ", resp);
    })
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
    let body = {
      operation: this.operacionSeleccionada
    }
    console.log("radio: ", this.operacionSeleccionada);
    this.selectedFilters.operation = this.operacionSeleccionada;
    this.operationSelect = true;
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
    console.log("radio inmueble: ", this.operacionInmueble);
    this.inmuebleSelect = true;
    this.selectedFilters.inmueble = this.operacionInmueble;
  }

  superficie() {
    switch (this.operacionSuperficie) {
      case 'construccion' : this.resultadoSuperficie = 'construccion';
        break;
      case 'terreno' : this.resultadoSuperficie = 'terreno';
        break;
    }
    this.superficieSelect = true;
    this.selectedFilters.superficie = this.operacionSuperficie;
  }

  precio() {
    switch (this.operacionPrecio) {
      case 'pesos' : this.resultadoPrecio = 'pesos';
        break;
      case 'dolares' : this.resultadoPrecio = 'dolares';
        break;
    }
    this.precioSelect = true;
    this.selectedFilters.precio = this.operacionPrecio;
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
    this.selectedFilters.antiguedad = this.operacionAnti;
  }

  bath(i){
    this.bathsSelect = true;
    if(i == 1){
      this.val1 = true;
      this.val2 = false;
      this.val3 = false;
      this.bathrooms = 1;
      let body = {
        baths: 'Baño +1'
      }
      this.selectedFilters.baths = '1 Baño';
      // this.selectedFilters.push(body);
    }
    if(i == 2){
      this.val1 = false;
      this.val2 = true;
      this.val3 = false;
      this.bathrooms = 2;
      let body = {
        baths: 'Baño +2'
      }
      this.selectedFilters.baths = '2 Baños';
      // this.selectedFilters.push(body);
    }
    if(i == 3){
      this.val1 = false;
      this.val2 = false;
      this.val3 = true;
      this.bathrooms = 3;
      let body = {
        baths: 'Baño +3'
      }
      this.selectedFilters.baths = '3 Baños';
      // this.selectedFilters.push(body);
    }
  }

  beth(i){
    this.bethsSelect = true;
    if(i == 1){
      this.valh1 = true;
      this.valh2 = false;
      this.valh3 = false;
      this.bathrooms = 1;
      let body = {
        baths: 'Baño +1'
      }
      this.selectedFilters.beths = '1 Recámara';
      // this.selectedFilters.push(body);
    }
    if(i == 2){
      this.valh1 = false;
      this.valh2 = true;
      this.valh3 = false;
      this.bathrooms = 2;
      let body = {
        baths: 'Baño +2'
      }
      this.selectedFilters.beths = '2 Recámaras';
      // this.selectedFilters.push(body);
    }
    if(i == 3){
      this.valh1 = false;
      this.valh2 = false;
      this.valh3 = true;
      this.bathrooms = 3;
      let body = {
        baths: 'Baño +3'
      }
      this.selectedFilters.beths = '3 Recámaras';
      // this.selectedFilters.push(body);
    }
  }
  
  parking(i){
    this.parksSelect = true;
    if(i == 1){
      this.park1 = true;
      this.park2 = false;
      this.park3 = false;
      this.parkinSize = 1;
      let body = {
        parks: 'Estacionamiento +1'
      }
      this.selectedFilters.parks = '1 Estacionamiento';
      // this.selectedFilters.push(body);
    }
    if(i == 2){
      this.park1 = false;
      this.park2 = true;
      this.park3 = false;
      this.parkinSize = 2;
      let body = {
        parks: 'Estacionamiento +2'
      }
      this.selectedFilters.parks = '2 Estacionamientos';
      // this.selectedFilters.push(body);
    }
    if(i == 3){
      this.park1 = false;
      this.park2 = false;
      this.park3 = true;
      this.parkinSize = 3;
      let body = {
        parks: 'Estacionamiento +3'
      }
      this.selectedFilters.parks = '3 Estacionamientos';
      // this.selectedFilters.push(body);
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
    const dialogRef = this.dialog.open(PreviewComponentSearch, {
      width: '30%',
      height: '85vh',
      data: {
        propObj: prop
      }
    });
  }
}
