import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  name: string;
  title: string;
  desc: string;
  phone: number;
}

@Component({
  selector: 'app-dialog-see-more',
  templateUrl: './dialog-see-more.component.html',
  styleUrls: ['./dialog-see-more.component.scss']
})
export class DialogSeeMoreComponent implements OnInit {
  name: string;
  title: string;
  desc: string;
  phone: number;

  constructor(
    public dialogRef: MatDialogRef<DialogSeeMoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.name = data.name;
    this.title = data.title;
    this.desc = data.desc;
    this.phone = data.phone;
   }

  ngOnInit() {
  }

}
