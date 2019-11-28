import { Component, OnInit } from '@angular/core';
import { UserServicesService } from '../../providers/user-api/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  signup_val: boolean;

  constructor(
    public user: UserServicesService,
    private router: Router
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
      if(data == 401){
        this.router.navigateByUrl(`/dash`);
      }
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

  reg(val){
    console.log("Datos para registro: ", val);
  }
}
