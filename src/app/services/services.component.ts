import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ServicesComponent implements OnInit {
  tabs: any = [
    {
      name: 'Comercialización de Inmuebles',
      content: 'Nos especializamos en la Venta, Renta y Administración de Bienes Inmuebles brindando atención integral durante todo el proceso; ya que contamos con las mejores opciones y recursos para publicitar tu inmueble y garantizar resultados en el menor tiempo y con el mejor servicio.'
    },
    {
      name: 'Asesoría financiera',
      content: 'Ofrecemos estrategias y planes de inversión en el sector inmobiliario presentando los mejores rendimientos del mercado, podemos realizar un plan de acuerdo a tus necesidades; y lo mejor de todo es que no es necesario que tengas experiencia en inversiones de ningún tipo, nosotros te asesoramos.'
    },
    {
      name: 'Trámites hipotecarios',
      content: 'Contamos con la información más completa de todas las opciones de crédito hipotecario disponibles en el mercado, te asesoramos para tomar en cuenta todas las posibilidades y variantes, además de que te acompañamos y brindamos la asesoría total durante el trámite.'
    },
    {
      name: 'Asesoría y Acompañamiento legal',
      content: 'Contamos con la experiencia para dar información y asesoría para los trámites, jurídicos, legales y notariales durante todos los procesos; además de contar con servicios jurídicos de la rama inmobiliaria como garantía jurídica.'
    },
    {
      name: 'Desarrollo de proyectos arquitectónicos y constructivos',
      content: 'Como socios comerciales de un despacho de Arquitectos contamos con toda la experiencia de asesoría en la planeación de proyectos de manera integral, mejorando significativamente la eficiencia, rentabilidad y aprovechamiento de los proyectos.'
    },
    {
      name: 'Desarrollos de proyectos de inversión',
      content: 'Tenemos diferentes proyectos inmobiliarios donde se puede invertir, obteniendo siempre la mayor seguridad y rentabilidad.'
    }
  ];
  selected = new FormControl(0);

  constructor() { }

  ngOnInit() {
  }


}
