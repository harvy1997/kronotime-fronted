import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected data:FooterElement[]=[
    {title:"Servicio al cliente",href:"",children:[
      {title:"Contáctanos",href:""},
      {title:"Métodos de Pago",href:""},
      {title:"Cambios y Devoluciones",href:""},
      {title:"Guía de Tallas",href:""},
      {title:"Alianza Hoteles",href:""},
      {title:"Encuesta",href:""},
      {title:"SIC",href:""},
      {title:"ADDI",href:""},
      {title:"Recoge en Tienda",href:""}
    ]},
    {title:"Nuestra empresa",href:"",children:[
      {title:"Quiénes Somos",href:""},
      {title:"Localizador de Tiendas",href:""},
      {title:"Prensa",href:""},
      {title:"Malva Edition",href:""},
      {title:"Malva Exclusive",href:""}
    ]},
  ]
}
type FooterElement={
  title:string,
  href ?:string,
  children ?:Array<FooterElement>
}