import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogAgregarPropiedadComponent } from './dialog-agregar-propiedad/dialog-agregar-propiedad.component';

@Component({
  selector: 'app-dashboard-propiedades',
  templateUrl: './dashboard-propiedades.component.html',
  styleUrls: ['./dashboard-propiedades.component.scss']
})
export class DashboardPropiedadesComponent implements OnInit {
  propiedades: ArrayBuffer;

  constructor(
    public user: UserServicesService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getPropiedades();
  }

  goPropiedad(id){
    this.user.getPropiedad(id).subscribe(
      (resp)=> {
        this.router.navigate(["propiedad", id]);
      },(err)=>{
        console.log(err);
      }
    )
  }

  getPropiedades(){
    this.user.propiedades().subscribe((data_resp) =>{
      this.propiedades = data_resp;
      console.log("Response props[]: ", data_resp);
    },(err)=>{
      console.log(err);
    });
  }

  agregarProp(){
    const dialogRef = this.dialog.open(DialogAgregarPropiedadComponent, {
      width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      //Regargar lista de usuarios
      this.getPropiedades();
    });
  }
}
