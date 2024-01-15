import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-buy',
  standalone: true,
  imports: [],
  templateUrl: './product-buy.component.html',
  styleUrl: './product-buy.component.scss'
})
export class ProductBuyComponent {
  @Input("producto")
  public producto:any;
  sum(){
    this.producto.cantidad+=1;
  }
  sub(){
    if(this.producto.cantidad>1){
      this.producto.cantidad-=1; 
    }
  }
}
