import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../../providers/user-api/user-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signup_val: boolean;

  constructor(
    public user: UserServicesService
  ) { 
    this.signup_val = false;
  }

  ngOnInit() {
  }

  onClickSubmit(val){
    let body = {
      remember: 1
    }

    let merged = Object.assign(body, val);

    this.user.login(merged).subscribe((data) =>{
      console.log("Response: ", data);
    },(err)=>{
      console.log(err);
    });
  }

  reg(data){
    console.log("info: ", data);
    this.user.register(data).subscribe((data_resp) =>{
      console.log("Response: ", data_resp);
    },(err)=>{
      console.log(err);
    });
  }

  signup(x){
    if(x){
      this.signup_val = true;
    }else{
      this.signup_val = false;
    }
  }
}
