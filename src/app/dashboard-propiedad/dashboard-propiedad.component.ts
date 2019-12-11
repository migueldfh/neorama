import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard-propiedad',
  templateUrl: './dashboard-propiedad.component.html',
  styleUrls: ['./dashboard-propiedad.component.scss']
})
export class DashboardPropiedadComponent implements OnInit {
  propid: string;
  propData: {
    name: string,
    state: string,
    city: string,
    producer: string,
    updated_at: string
  } = {
    name: '',
    state: '',
    city: '',
    producer: '',
    updated_at: ''
  }

  constructor(
    private readonly route: ActivatedRoute,
    public user: UserServicesService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.propid = params.get("id");
    });
    this.goPropiedad(this.propid);
  }

  goPropiedad(id){
    this.user.getPropiedad(id).subscribe(
      (resp)=> {
        console.log("inside prop: ", resp);
        this.propData.name = resp['name'];
        this.propData.producer = resp['producer'];
        this.propData.state = resp['state'];
        this.propData.city = resp['city'];
        this.propData.updated_at = resp['updated_at'];
      },(err)=>{
        console.log(err);
      }
    )
  }

  delete(id){
    this.user.deletePropiedad(id).subscribe((resp)=>{
      alert("Propiedad borrada!");
      this.router.navigate(["propiedades"]);
    });
  }

}
