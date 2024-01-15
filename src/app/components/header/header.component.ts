import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected open=false;
  protected openOption=false;
  protected option=Array<any>();
  protected menuIsOpen=false;
  protected idMobile=-1;

  protected menu=[
    {title:"nuevo",href:"/nuevo",mobile:true},
    {title:"Mujer",href:"/mujer",mobile:false,children:[
      {category:"Ropa",href:"",subcategories:[
        {subcategory:"abrigos",href:""},
        {subcategory:"chaquetas",href:""},
        {subcategory:"vestidos",href:""},
        {subcategory:"faldas",href:""},
        {subcategory:"blusas",href:""}
      ]},
      {category:"calzado",href:"",subcategories:[
        {subcategory:"sandalias",href:""},
        {subcategory:"tenis",href:""},
        {subcategory:"botas",href:""},
        {subcategory:"tacones",href:""},
        {subcategory:"casuales",href:""}
      ]},
      {category:"bolsos",href:"",subcategories:[
        {subcategory:"morrales",href:""},
        {subcategory:"maletines",href:""},
        {subcategory:"canguros",href:""},
        {subcategory:"riñonera",href:""},
        {subcategory:"billetera",href:""}
      ]}
      
    ]},
    {title:"hombre",href:"/hombre",mobile:false,children:[
      {category:"Ropa",href:"",subcategories:[
        {subcategory:"abrigos",href:""},
        {subcategory:"chaquetas",href:""},
        {subcategory:"vestidos",href:""},
        {subcategory:"faldas",href:""},
        {subcategory:"blusas",href:""}
      ]},
      {category:"calzado",href:"",subcategories:[
        {subcategory:"sandalias",href:""},
        {subcategory:"tenis",href:""},
        {subcategory:"botas",href:""},
        {subcategory:"tacones",href:""},
        {subcategory:"casuales",href:""}
      ]},
      {category:"bolsos",href:"",subcategories:[
        {subcategory:"morrales",href:""},
        {subcategory:"maletines",href:""},
        {subcategory:"canguros",href:""},
        {subcategory:"riñonera",href:""},
        {subcategory:"billetera",href:""}
      ]}
      
    ]},
    {title:"belleza",href:"/belleza",mobile:false},
    {title:"decoración",href:"/decoración" ,mobile:true},
    {title:"niñas",href:"/ninas",mobile:true},
    {title:"sales",href:"/sales",mobile:false},
  ]
  
  showInfo(item:any){
    if(item.children){
      this.option=item.children;
      this.openOption=true;
    }else{
      this.openOption=false;
    }
    
  }
  unshowOption(){
    this.openOption=false
  }
  openMenu(){
    this.menuIsOpen=!this.menuIsOpen;
    this.option=[]
    this.idMobile=-1;
  }
  showInfoMobile(item:any,id:number){
    if(item.children){
      this.idMobile==id?this.idMobile=-1:this.idMobile=id;
      this.option=item.children;
    }
    
  }
}
