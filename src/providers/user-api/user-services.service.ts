import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { APIServiceService } from '../api/apiservice.service';
@Injectable({
  providedIn: 'root'
})
export class UserServicesService {
  _user: any;

  constructor(
    public api: APIServiceService,
    public http: HttpClient
  ) { }

  login(body){
    let seq = this.api.post("login", body);
   
    seq.subscribe((res: any) => {
      console.log("user resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  register(body){
    let seq = this.api.post("salesman", body);
   
    seq.subscribe((res: any) => {
      console.log("register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  _loggedIn(resp) {
    this._user = resp.user;
  }
}
