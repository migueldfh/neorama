import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';

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
  
  constructor(
    public userApi: UserServicesService
  ) { 
    this.selected = false;
  }

  ngOnInit() {
    this.userApi.propiedades().subscribe(resp=>{
      this.properties = resp;
    });
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
}
