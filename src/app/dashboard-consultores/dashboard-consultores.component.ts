import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';

@Component({
  selector: 'app-dashboard-consultores',
  templateUrl: './dashboard-consultores.component.html',
  styleUrls: ['./dashboard-consultores.component.scss']
})
export class DashboardConsultoresComponent implements OnInit {
  data: boolean;
  email: any;
  pass: any;
  error: any;
  err: boolean;

  constructor(
    public user: UserServicesService
  ) { 
    this.data = false;
    this.err = false;
  }

  ngOnInit() {
  }

  reg(data){
    console.log("info: ", data);
    this.user.register(data).subscribe((data_resp) =>{
      console.log("Response: ", data_resp);
      if(data_resp){
        this.data = true;
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
