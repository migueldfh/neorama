import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { PreviewComponent } from './preview/preview.component';

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
      id: 1,
      name: 'Terreno en Renta, Monterrey',
      img: '../../assets/img/architectural-design-architecture-balcony-2775313.jpg',
      price: 33000,
      address: 'Valle del Mirador #203 Colonia Mirador, Monterrey, NL. C.P. 64910'
    },
    {
      id: 2,
      name: 'Casa en Renta, Monterrey',
      img: '../../assets/img/apartments-architectural-design-architecture-2334160.jpg',
      price: 33000,
      address: 'Valle del Mirador #203 Colonia Mirador, Monterrey, NL. C.P. 64910'
    },
    {
      id: 3,
      name: 'Terreno en Venta, San Nicolás',
      img: '../../assets/img/pexels-photo-206172.jpeg',
      price: 33000,
      address: 'Valle del Mirador #203 Colonia Mirador, Monterrey, NL. C.P. 64910'
    },
    {
      id: 4,
      name: 'Oficinas en Renta, Linda Vista',
      img: '../../assets/img/architectural-design-architecture-country-home-2287310.jpg',
      price: 33000,
      address: 'Valle del Mirador #203 Colonia Mirador, Monterrey, NL. C.P. 64910'
    },
    {
      id: 5,
      name: 'Oficinas en Venta, Centro de Mty',
      img: '../../assets/img/architectural-design-architecture-balcony-2775313.jpg',
      price: 33000,
      address: 'Valle del Mirador #203 Colonia Mirador, Monterrey, NL. C.P. 64910'
    },
    {
      id: 6,
      name: 'Casa en Venta, Monterrey',
      img: '../../assets/img/pexels-photo-293983.jpeg',
      price: 33000,
      address: 'Valle del Mirador #203 Colonia Mirador, Monterrey, NL. C.P. 64910'
    },
  ]
  
  constructor(
    public dialog: MatDialog
  ) { 
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
