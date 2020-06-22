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
  selectedFilters: any = [
    {
      city: '',
      inmueble: '',
      baths: '',
      parks: '',
      operation: ''
    }
  ];
  val1: boolean;
  val2: boolean;
  val3: boolean;
  park1: boolean;
  park2: boolean;
  park3: boolean;
  bathrooms: number;
  parkinSize: number;
  displayParameter: any;
  resultado=null;
  resultadoInmueble=null;
  operacionSeleccionada: string;
  operacionInmueble: string;
  location_control = new FormControl();
  constructor(
    public userApi: UserServicesService,
    public dialog: MatDialog
  ) { 
    this.selected = false;
  }

  ngOnInit() {
    this.userApi.propiedades().subscribe(resp=>{
      this.properties = resp;
    });
  }
  
  filter(modify){
    let body = {
      city: modify,
      operation: '',
      type: '',
      bath: '',
      parking: ''
    }

    this.userApi.search(body).subscribe(resp=>{
      console.log("resp filter: ", resp);
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
    let body = {
      operation: this.operacionSeleccionada
    }
    console.log("radio: ", this.operacionSeleccionada);
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
  }

  bath(i){
    if(i == 1){
      this.val1 = true;
      this.val2 = false;
      this.val3 = false;
      this.bathrooms = 1;
      let body = {
        baths: 'Baño +1'
      }
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
      // this.selectedFilters.push(body);
    }
  }
  
  parking(i){
    if(i == 1){
      this.park1 = true;
      this.park2 = false;
      this.park3 = false;
      this.parkinSize = 1;
      let body = {
        parks: 'Estacionamiento +1'
      }
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
      // this.selectedFilters.push(body);
    }
  }

  deleteFilter(i){
    this.selectedFilters.splice(i, 1);
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
