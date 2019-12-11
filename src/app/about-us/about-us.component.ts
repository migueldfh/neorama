import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  empleados: any = [
    {
      name: 'Francisco Banda',
      img: '../../assets/img/attractive-beautiful-beauty-1024311.png',
      phone: '(81) 1297 0148',
      email: 'info@neorama.mx'
    },
    {
      name: 'Liliana Uribe',
      img: '../../assets/img/adult-agenda-black-suit-1415856.png',
      phone: '(81) 1297 0148',
      email: 'info@neorama.mx'
    },
    {
      name: 'José Rodriguez',
      img: '../../assets/img/pexels-photo-2182970.png',
      phone: '(81) 1297 0148',
      email: 'info@neorama.mx'
    },
    {
      name: 'Francisco Banda',
      img: '../../assets/img/attractive-beautiful-beauty-1024311.png',
      phone: '(81) 1297 0148',
      email: 'info@neorama.mx'
    },
    {
      name: 'Liliana Uribe',
      img: '../../assets/img/adult-agenda-black-suit-1415856.png',
      phone: '(81) 1297 0148',
      email: 'info@neorama.mx'
    },
    {
      name: 'José Rodriguez',
      img: '../../assets/img/pexels-photo-2182970.png',
      phone: '(81) 1297 0148',
      email: 'info@neorama.mx'
    },
    {
      name: 'Fernando Banda',
      img: '../../assets/img/adult-agenda-black-suit-1415856.png',
      phone: '(81) 1297 0148',
      email: 'info@neorama.mx'
    },
    {
      name: 'Edson Banda',
      img: '../../assets/img/pexels-photo-2182970.png',
      phone: '(81) 1297 0148',
      email: 'info@neorama.mx'
    },
  ]
  constructor() { }

  ngAfterViewInit(){
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  }
  
  ngOnInit() {
  }

}
