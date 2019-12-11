import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/providers/user-api/user-services.service';

@Component({
  selector: 'app-dialog-agregar-propiedad',
  templateUrl: './dialog-agregar-propiedad.component.html',
  styleUrls: ['./dialog-agregar-propiedad.component.scss']
})
export class DialogAgregarPropiedadComponent implements OnInit {

  reference
  image
  price
  owner
  producer
  parcial_rent
  name
  total_built
  surface
  covered
  semi_covered
  uncovered
  spaces
  rooms
  bathrooms
  restrooms
  parking
  floors
  antique
  maintenance
  rent
  street
  ext_number
  int_number
  neighborhood
  city
  state
  zipcode
  url
  err: boolean;
  result: boolean;

  constructor(
    public user: UserServicesService
  ) { }

  ngOnInit() {
  }

  reg(data){

    let body = {
      reference: data.reference,
      // image: data.image,
      image: "/",
      price: data.price,
      owner: data.owner,
      producer: data.producer,
      parcial_rent: data.parcial_rent,
      name: data.name,
      total_built: data.total_built,
      surface: data.surface,
      covered: data.covered,
      semi_covered: data.semi_covered,
      uncovered: data.uncovered,
      spaces: data.spaces,
      rooms: data.rooms,
      bathrooms: data.bathrooms,
      restrooms: data.restrooms,
      parking: data.parking,
      floors: data.floors,
      antique: data.antique,
      maintenance: data.maintenance,
      rent: data.rent,
      street: data.street,
      ext_number: data.ext_number,
      int_number: data.int_number,
      neighborhood: data.neighborhood,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      url: "/"
    }
    
    this.user.postPropiedad(body).subscribe((data_resp) =>{
      if(data_resp){
        this.result = true;
      }else{
        this.err = true;
      }
    },(err)=>{
      console.log(err);
    });
  }
}
