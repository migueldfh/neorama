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
  foods = [
    {value: 'steak-0', viewValue: 'Casas'},
    {value: 'pizza-1', viewValue: 'Departamentos'},
    {value: 'tacos-2', viewValue: 'Terrenos'}
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
    });
  }

  search(){
    this.router.navigate(["/properties"]);
  }

  status(i){
    if(i == 1){
      this.selected1 = true;
      this.selected2 = false;
      this.selected3 = false;
      this.selected4 = false;
      this.selected5 = false;
    }
    if(i == 2){
      this.selected1 = false;
      this.selected2 = true;
      this.selected3 = false;
      this.selected4 = false;
      this.selected5 = false;
    }
    if(i == 3){
      this.selected1 = false;
      this.selected2 = false;
      this.selected3 = true;
      this.selected4 = false;
      this.selected5 = false;
    }
    if(i == 4){
      this.selected1 = false;
      this.selected2 = false;
      this.selected3 = false;
      this.selected4 = true;
      this.selected5 = false;
    }
    if(i == 5){
      this.selected1 = false;
      this.selected2 = false;
      this.selected3 = false;
      this.selected4 = false;
      this.selected5 = true;
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
