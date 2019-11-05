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
      name: 'Crédito para adquisición',
      content: 'Es el préstamo que otorga un banco para la compra de un inmueble nuevo o usado. Este crédito no cubrirá el 100% del valor del inmueble, ya que el enganche deberá ser pagado directamente por el comprador de la vivienda.'
    },
    {
      name: 'Crédito para construcción',
      content: 'Estos créditos son utilizados para financiar la construcción de un inmueble, desde 0% avance de obra en algunos casos o a petición del banco presentar determinado avance en la obra este es determinado por el banco; la cantidad financiada se va a otorgar por medio de ministraciones o emisiones.'
    },
    {
      name: 'Crédito para mejorar las condiciones de un crédito hipotecario actual',
      content: 'Este crédito está dirigido a quienes ya cuentan con una hipoteca pero desean cambiar las condiciones bajo las cuales la pactaron inicialmente, al transferir su deuda a otra institución bancaria. Los beneficios que el cliente puede obtener mediante una sustitución de hipoteca son: reducción del plazo del crédito, reducción el monto de las mensualidades y reducción de la tasa de interés'
    },
    {
      name: 'Crédito liquidez',
      content: 'Estos créditos sirven para que quien los contrata pueda pagar una necesidad inmediata o algún imprevisto, como puede ser una emergencia médica o familiar, un viaje, una compra, etc, el objeto del crédito es una propiedad habitacional propiedad del solicitante de crédito.'
    },
    {
      name: 'Crédito terreno',
      content: 'En este caso el banco financia una parte del valor del terreno, según políticas de porcentaje de financiamiento, y el cliente pone la diferencia para cubrir el 100% del valor de inmueble. Cabe mencionar que debido a que un terreno no soluciona el problema de vivienda de una persona las instituciones financieras son más estrictas para la autorización y otorgamiento de este tipo de financiamiento.'
    },
    {
      name: 'Crédito infonavit total',
      content: 'Es una opción que permite a los derechohabientes del IMSS comprar una vivienda de cualquier monto, disponiendo de un crédito mayor y del total de la subcuenta de vivienda. Solo a través de Banamex. Ventajas Asesoría profesional de acuerdo a las necesidades del cliente Trámite directo con la institución bancaria Trámite sin costo Confidencialidad en la información del cliente'
    },
    {
      name: 'Financiamiento',
      content: 'Texto sobre el serivicio de financiamiento.'
    },
  ];
  selected = new FormControl(0);

  constructor() { }

  ngOnInit() {
  }


}
