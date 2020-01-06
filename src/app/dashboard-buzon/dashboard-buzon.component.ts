import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard-buzon',
  templateUrl: './dashboard-buzon.component.html',
  styleUrls: ['./dashboard-buzon.component.scss']
})
export class DashboardBuzonComponent implements OnInit {
  email: boolean;
  data: Object;
  emaisArray: ArrayBuffer;

  constructor(
    public user: UserServicesService,
    private spinner: NgxSpinnerService
  ) { 
    this.email = false;
  }

  ngOnInit() {
  }

  emailForm(val){
    console.log("datos en nota:", val);
    let body = {
      holding_id: "1",
      note: "Envio de prueba"
    }
    this.user.sendEmail(val).subscribe((resp)=>{
      console.log("bitacora resp: ", resp);
      this.data = resp;
      if(this.data == 200){
        this.email = true;
        this.sp();
      }
    });
  }

  sp(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 2000);
  }

  buzon(){
    this.email = false;
  }
}
