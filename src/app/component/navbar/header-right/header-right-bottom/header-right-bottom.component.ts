import {Component, Input} from '@angular/core';
import {ItemAComponent} from './item-a/item-a.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {CartService} from '../../../../services/product/cart.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header-right-bottom',
  standalone: true,
  imports: [
    ItemAComponent, MatIconModule, MatButtonModule, MatBadgeModule, RouterLink
  ],
  templateUrl: './header-right-bottom.component.html',
  styleUrl: './header-right-bottom.component.scss'
})
export class HeaderRightBottomComponent {

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


  srcs = [
    {
      src: 'image/location_on_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png',
    },
    {
      src: 'image/person_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png',
    },
    {
      src: 'image/notifications_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png',
    },
    {
      src: 'image/local_mall_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png',
    },
  ]
}
