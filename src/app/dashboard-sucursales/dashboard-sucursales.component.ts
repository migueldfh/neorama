import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-sucursales',
  templateUrl: './dashboard-sucursales.component.html',
  styleUrls: ['./dashboard-sucursales.component.scss']
})
export class DashboardSucursalesComponent implements OnInit {
  sucursales: any;
  mat: boolean;

  constructor(
    public user: UserServicesService,
    private router: Router
  ) {
    this.mat = false;
  }
  
  ngOnInit() {
    this.getSucursales();
  }

  goSucursal(id){
    this.user.getSucursal(id).subscribe(
      (resp)=> {
        this.router.navigate(["sucursal", id]);
      },(err)=>{
        console.log(err);
      }
    )
  }

  regSucursal(element){
    this.user.addSucursal(element).subscribe(
      (resp)=> {
        console.log("Add: ", resp);
        this.mat = true;
        this.getSucursales();
      },(err)=>{
        console.log(err);
      }
    )
  }

  getSucursales(){
    this.user.sucursales().subscribe((data_resp) =>{
      this.sucursales = data_resp;
      console.log("Response suc[]: ", data_resp);
    },(err)=>{
      console.log(err);
    });
    this.mat = false;
  }
}
