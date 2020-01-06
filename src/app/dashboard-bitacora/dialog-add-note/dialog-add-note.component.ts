import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
// import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-note',
  templateUrl: './dialog-add-note.component.html',
  styleUrls: ['./dialog-add-note.component.scss']
})
export class DialogAddNoteComponent implements OnInit {
  data: Object;
  list: ArrayBuffer;

  constructor(
    public user: UserServicesService,
    // private spinner: NgxSpinnerService,
    public dialogRef: MatDialogRef<DialogAddNoteComponent>,
  ) { }

  ngOnInit() {
    this.getNotas();
  }

  close(): void {
    this.dialogRef.close();
  }

  getNotas(){
    this.user.bitacora().subscribe((dataBitacora)=>{
      console.log("bitacora: ", dataBitacora);
      this.list = dataBitacora;
    });
  }

  agregarNota(val){
    console.log("datos en nota:", val);
    let id = this.list.byteLength;

    let body = {
      holding_id: "1",
      note: "Envio de prueba"
    }
    this.user.bitacoraPostNote(body).subscribe((resp)=>{
      this.data = resp;
      console.log("bitacora resp: ", resp);
      if(this.data == 200){
        this.close();
      }
    });
  }
}
