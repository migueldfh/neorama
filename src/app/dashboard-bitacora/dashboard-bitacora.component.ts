import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { DialogAddNoteComponent } from './dialog-add-note/dialog-add-note.component';
import { MatDialog } from '@angular/material';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-bitacora',
  templateUrl: './dashboard-bitacora.component.html',
  styleUrls: ['./dashboard-bitacora.component.scss']
})
export class DashboardBitacoraComponent implements OnInit {
  data: Object;
  displayedColumns: string[] = ['Nombre', 'Autor'];
  dataSource: any;

  constructor(
    public user: UserServicesService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.getNotas();
  }

  getNotas(){
    this.user.bitacora().subscribe((dataBitacora)=>{
      console.log("bitacora: ", dataBitacora);
      this.dataSource = dataBitacora;
    });
  }

  agregarNota(){
    const dialogRef = this.dialog.open(DialogAddNoteComponent, {
      width: '60%',
      // data: {id: this.dataSource}
    });

    dialogRef.afterClosed().subscribe(result => {
      //Regargar lista de usuarios
      this.getNotas();
      this.sp();
    });
  }

  sp(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }
}
