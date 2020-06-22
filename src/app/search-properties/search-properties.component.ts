import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { MatDialog } from '@angular/material';
import { PreviewComponentSearch } from './preview/preview.component';

@Component({
  selector: 'app-search-properties',
  templateUrl: './search-properties.component.html',
  styleUrls: ['./search-properties.component.scss']
})
export class SearchPropertiesComponent implements OnInit {
  properties: any = [];
  selectedFilters: any = [
    {
      name: 'Casa'
    },
    {
      name: 'Mascotas permitidas'
    },
  ];
  val1: boolean;
  val2: boolean;
  val3: boolean;
  park1: boolean;
  park2: boolean;
  park3: boolean;
  constructor(
    private readonly route: ActivatedRoute,
    public userApi: UserServicesService,
    public dialog: MatDialog
  ) { 
    this.userApi.propiedades().subscribe(resp=>{
      this.properties = resp;
      console.log("prop? ", this.properties);
    });
    this.val1 = false;
    this.val2 = false;
    this.val3 = false;
    this.park1 = false;
    this.park2 = false;
    this.park3 = false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let getting = params.get("element");
    });
  }

  filter(element){
    console.log("add to filter: ", element);
  }

  deleteFilter(i){
    this.selectedFilters.splice(i, 1);
  }

  bath(i){
    if(i == 1){
      this.val1 = true;
      this.val2 = false;
      this.val3 = false;
    }
    if(i == 2){
      this.val1 = false;
      this.val2 = true;
      this.val3 = false;
    }
    if(i == 3){
      this.val1 = false;
      this.val2 = false;
      this.val3 = true;
    }
  }

  parking(i){
    if(i == 1){
      this.park1 = true;
      this.park2 = false;
      this.park3 = false;
    }
    if(i == 2){
      this.park1 = false;
      this.park2 = true;
      this.park3 = false;
    }
    if(i == 3){
      this.park1 = false;
      this.park2 = false;
      this.park3 = true;
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
