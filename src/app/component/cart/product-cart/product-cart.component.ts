import {Component, Input} from '@angular/core';
import {CartService} from '../../../services/product/cart.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
  @Input()src!: string;
  @Input()Name!: string;
  @Input()price!: string;
  @Input()id!: number;
  @Input()sl!: number;

  constructor(protected cartService: CartService) {}

  increaseQuantity() {
    this.cartService.increaseQuantity(this.id);
  }

  decreaseQuantity() {
    this.cartService.decreaseQuantity(this.id);
  }

  removeProduct() {
    this.cartService.removeFromCart(this.id);
  }
}
