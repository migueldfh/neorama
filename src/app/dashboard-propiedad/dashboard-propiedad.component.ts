import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/providers/user-api/user-services.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dashboard-propiedad',
  templateUrl: './dashboard-propiedad.component.html',
  styleUrls: ['./dashboard-propiedad.component.scss']
})
export class DashboardPropiedadComponent implements OnInit {
  propid: string;

  constructor(
    private readonly route: ActivatedRoute,
    public user: UserServicesService,
    public dialog: MatDialog
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
      },(err)=>{
        console.log(err);
      }
    )
  }

}
