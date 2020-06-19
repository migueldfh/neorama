import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogSeeMoreComponent } from './dialog-see-more/dialog-see-more.component';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  auto: boolean;

  constructor(
    public dialog: MatDialog
  ) {
    this.auto = true;
   }
  public imagesUrl;
  ngAfterViewInit() {
  }

  ngOnInit() {
    this.imagesUrl = ['../../assets/img/1.png', '../../assets/img/3.png', '../../assets/img/4.png', '../../assets/img/2.png', '../../assets/img/5.png'];
  }

  seeMore(name, title, desc, phone){
    const dialogRef = this.dialog.open(DialogSeeMoreComponent, {
      width: '30%',
      data: {
        name: name,
        title: title,
        desc: desc,
        phone: phone
      }
    });

    dialogRef.afterOpen().subscribe(result => {
      //Nothing here
      this.auto = false;
    });
    
    dialogRef.afterClosed().subscribe(resp =>{
      this.auto = true;
    })
  }

}
