import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { PreviewComponentSearch } from '../search-properties/preview/preview.component';
import { MatDialog } from '@angular/material';

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
  
  educationList: any = [
    {
      'educationLevelName': 'PSC/5 pass',
      degreeTitleList: [
        'PSC', '5 Pass', 'Other',
      ]
    },
    {
      'educationLevelName': 'JSC/JDC/8 pass',
      degreeTitleList: [
        'JSC', '8 Pass', 'Other'
      ]
    },
    {
      'educationLevelName': 'Secondary',
      degreeTitleList: [
        'SSC', 'O Level', 'Other',
      ]
    }
  ];
  properties: any = [];
  selectedFilters: any = [];
  val1: boolean;
  val2: boolean;
  val3: boolean;
  park1: boolean;
  park2: boolean;
  park3: boolean;
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
  
  filter(element){
    console.log("add to filter: ", element);
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

  deleteFilter(i){
    this.selectedFilters.splice(i, 1);
  }

  educationLevelChangeAction(education) {
    this.exam_title="";
    let dropDownData = this.educationList.find((data: any) => data.educationLevelName === education);
    if (dropDownData) {
      this.degreeTitleList = dropDownData.degreeTitleList;
      if(this.degreeTitleList){
        this.exam_title=this.degreeTitleList[0];
      }
      
    } else {
      this.degreeTitleList = [];
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
