import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServicesService } from 'src/providers/user-api/user-services.service';

export interface DialogData {
  id: number;
}

@Component({
  selector: 'app-dialog-add-consultor',
  templateUrl: './dialog-add-consultor.component.html',
  styleUrls: ['./dialog-add-consultor.component.scss']
})
export class DialogAddConsultorComponent implements OnInit {
  venue_id: number;
  email: any;
  pass: any;
  error: any;
  err: boolean = false;
  result: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddConsultorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public user: UserServicesService,
  ) {
    this.venue_id = data.id;
   }

  close(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  reg(data){

    let body = {
      email: data.email,
      name: data.name,
      venue_id: this.venue_id
    }
    
    this.user.register(body).subscribe((data_resp) =>{
      if(data_resp){
        this.result = true;
        this.email = data_resp['email'];
        this.pass = data_resp['generated_password'];
      }else{
        this.err = true;
        this.error = data_resp['message'];
      }
    },(err)=>{
      console.log(err);
    });
  }

}
