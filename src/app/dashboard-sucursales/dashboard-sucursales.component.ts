import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';

@Component({
  selector: 'app-dashboard-sucursales',
  templateUrl: './dashboard-sucursales.component.html',
  styleUrls: ['./dashboard-sucursales.component.scss']
})
export class DashboardSucursalesComponent implements OnInit {
  sucursales: any;

  constructor(
    public user: UserServicesService
  ) {
    this.getSucursales();
   }

  ngOnInit() {
  }

  reg(data){
    console.log("info: ", data);
    this.user.register(data).subscribe((data_resp) =>{
      console.log("Response: ", data_resp);
    },(err)=>{
      console.log(err);
    });
  }

  getSucursales(){
    this.user.sucursales().subscribe((data_resp) =>{
      this.sucursales = data_resp;
      console.log("Response suc[]: ", data_resp);
    },(err)=>{
      console.log(err);
    });
  }
}
