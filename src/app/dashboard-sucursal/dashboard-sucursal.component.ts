import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogAddConsultorComponent } from './dialog-add-consultor/dialog-add-consultor.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-sucursal',
  templateUrl: './dashboard-sucursal.component.html',
  styleUrls: ['./dashboard-sucursal.component.scss']
})
export class DashboardSucursalComponent implements OnInit {
  sucursalData: {
    name: string,
    state: string,
    address: string
  } = {
    name: '',
    state: '',
    address: '',
  }
  get_id: string;
  sucursalData_users: any;
  users: boolean = false;

  constructor(
    private readonly route: ActivatedRoute,
    public user: UserServicesService,
    public dialog: MatDialog,
    private spinner: NgxSpinnerService
  ) {
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.get_id = params.get("id");
    });
    this.goSucursal(this.get_id);
    this.sp();
    console.log("User state?", this.users)
  }

  sp(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  goSucursal(id){
    this.user.getSucursal(id).subscribe(
      (resp)=> {
        this.sucursalData.name = resp['name'];
        this.sucursalData.address = resp['address'];
        this.sucursalData.state = resp['state'];
        this.sucursalData_users = resp['users'];
        console.log("Usuarios?", resp['users']);
        if(resp['users'] === []){
          this.users = false;
        }else{
          this.users = true;
        }
      },(err)=>{
        console.log(err);
      }
    )
  }
  
  agregarUsuarios(){
    const dialogRef = this.dialog.open(DialogAddConsultorComponent, {
      width: '60%',
      data: {id: this.get_id}
    });

    dialogRef.afterClosed().subscribe(result => {
      //Regargar lista de usuarios
      this.goSucursal(this.get_id);
      this.sp();
    });
  }

}
