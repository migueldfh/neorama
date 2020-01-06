import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;
declare var require: any;

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit, AfterViewInit {
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

  ngAfterViewInit() {
    $("#myCarousel").on("slide.bs.carousel", function(e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $(".carousel-item").length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = (totalItems - idx*itemsPerSlide);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $(".carousel-item")
              .eq(i)
              .appendTo(".carousel-inner");
          } else {
            $(".carousel-item")
              .eq(0)
              .appendTo($(this).find(".carousel-inner"));
          }
        }
      }
    });
  }

  ngOnInit() {
  }

}
