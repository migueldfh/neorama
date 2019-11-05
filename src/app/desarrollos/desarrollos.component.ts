import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-desarrollos',
  templateUrl: './desarrollos.component.html',
  styleUrls: ['./desarrollos.component.scss']
})
export class DesarrollosComponent implements OnInit {

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

  properties: any = [
    {
      name: 'Monterrey',
      img: '../../assets/img/architectural-design-architecture-balcony-2775313.jpg',
      price: '33000'
    },
    {
      name: 'Escobedo',
      img: '../../assets/img/apartments-architectural-design-architecture-2334160.jpg',
      price: '33000'
    },
    {
      name: 'San Nicolás',
      img: '../../assets/img/pexels-photo-206172.jpeg',
      price: '33000'
    },
    {
      name: 'Linda Vista',
      img: '../../assets/img/architectural-design-architecture-country-home-2287310.jpg',
      price: '33000'
    },
    {
      name: 'Centro de Mty',
      img: '../../assets/img/architectural-design-architecture-balcony-2775313.jpg',
      price: '33000'
    },
    {
      name: 'Monterrey',
      img: '../../assets/img/pexels-photo-293983.jpeg',
      price: '33000'
    },
  ]
  
  constructor() { 
    this.selected = false;
  }

  ngOnInit() {
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
