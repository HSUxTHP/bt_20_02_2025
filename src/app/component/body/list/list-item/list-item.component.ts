import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {product} from '../../../../model/product.model';
import {CartService} from '../../../../services/product/cart.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input() product!: product;


  constructor(protected cartService: CartService) {
  }



}
