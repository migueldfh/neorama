import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NewsletterComponent } from '../newsletter/newsletter.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

    constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
  }


  ngAfterViewInit(){
    const dialogRef = this.dialog.open(NewsletterComponent, {
      width: '50%'
    });

    dialogRef.afterClosed().subscribe(result => {
      //Nothing here
    });
  }

}
