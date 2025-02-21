import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ProductCartComponent} from '../../component/cart/product-cart/product-cart.component';
import {CartService} from '../../services/product/cart.service';
import {product} from '../../model/product.model';
import {MatSlideToggle} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    RouterLink,
    ProductCartComponent,
    MatSlideToggle
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cart: any[] = [];
  totalQuantity: number = 0;

  constructor(protected cartService: CartService) {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });

    this.cartService.getTotalQuantity().subscribe(total => {
      this.totalQuantity = total;
    });
  }
}
