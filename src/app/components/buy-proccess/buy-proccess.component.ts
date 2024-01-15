import { Component } from '@angular/core';
import { ProductBuyComponent } from '../product-buy/product-buy.component';

@Component({
  selector: 'app-buy-proccess',
  standalone: true,
  imports: [ProductBuyComponent],
  templateUrl: './buy-proccess.component.html',
  styleUrl: './buy-proccess.component.scss'
})
export class BuyProccessComponent {
  protected producto={
    nombre:"Chamarra super fashion",
    cantidad:2,
    precio:40000,
    compare_precio:30000
  }
}
