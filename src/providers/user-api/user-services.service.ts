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
    return this.api.post("login", body);
    
    // let seq = this.api.post("login", body);
   
    // seq.subscribe((res: any) => {
    //   console.log("user resp: ", res);
    // }, err => {
    //   console.error('ERROR', err);
    // });

    // return seq;
  }

  register(body){
    let seq = this.api.post("salesman", body);
   
    seq.subscribe((res: any) => {
      // console.log("Register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  sendEmail(body){
    let seq = this.api.post("holding/send", body);
   
    seq.subscribe((res: any) => {
      // console.log("Register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  
  search(body){
    let seq = this.api.post("search/", body);
   
    seq.subscribe((res: any) => {
      // console.log("Register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  getEmail(){
    let seq = this.api.get("holding");
   
    seq.subscribe((res: any) => {
      // console.log("Register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  bitacora(){
    let seq = this.api.get("binnacles");
   
    seq.subscribe((res: any) => {
      // console.log("Register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  bitacoraPostNote(body){
    let seq = this.api.post("binnacles/holding", body);
   
    seq.subscribe((res: any) => {
      // console.log("Register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  sucursales(){

    let seq = this.api.get("venues");
   
    seq.subscribe((res: any) => {
      // console.log("Sucursales resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  propiedades(){
    return this.api.get("holdings");
  }

  getPropiedad(id){

    let seq = this.api.get("holding/"+id);
   
    seq.subscribe((res: any) => {
      console.log("Propiedades resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  deletePropiedad(id){

    let seq = this.api.get("holdings/d/"+id);
   
    seq.subscribe((res: any) => {
      console.log("Propiedades resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  postPropiedad(body){

    let seq = this.api.post("holdings", body);
   
    seq.subscribe((res: any) => {
      console.log("Propiedades resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  getSucursal(id){

    let seq = this.api.get("venue/"+id);
   
    seq.subscribe((res: any) => {
      // console.log("get sucursal resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  
  addSucursal(body){

    let seq = this.api.post("venues", body);
   
    seq.subscribe((res: any) => {
      console.log("register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  
  getClients(){

    let seq = this.api.get("clients");
   
    seq.subscribe((res: any) => {
      console.log("register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  
  addClients(body){

    let seq = this.api.post("clients", body);
   
    seq.subscribe((res: any) => {
      console.log("register resp: ", res);
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  
  deleteClients(id, body){
    let seq = this.api.post("clients/" + id + "/delete", body);
   
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
