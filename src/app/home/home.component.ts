import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PreviewComponent } from './preview/preview.component';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { UserServicesService } from '../../providers/user-api/user-services.service';

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
  
  constructor(
    public dialog: MatDialog,
    public userApi: UserServicesService
  ) { 
    this.selected = false;
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

  preview(prop){
    const dialogRef = this.dialog.open(PreviewComponent, {
      width: '30%',
      data: {
        propObj: prop
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      //Nothing here
    });
  }
}
