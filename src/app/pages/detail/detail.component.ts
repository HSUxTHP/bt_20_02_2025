import { Component } from '@angular/core';
import {product} from '../../model/product.model';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../services/product/product.service';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {CartService} from '../../services/product/cart.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    MatIconButton
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  currentProduct!: product | undefined;


 constructor(private activatedRoute: ActivatedRoute,
             private productService: ProductService,
             protected cartService: CartService,
             private location: Location) {
   const {id} = this.activatedRoute.snapshot.params;
    this.currentProduct = this.productService.getProductById(id);
 }

  goBack() {
    this.location.back();
  }
}

