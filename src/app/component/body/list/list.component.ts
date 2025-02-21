import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ListItemComponent} from './list-item/list-item.component';
import {product} from '../../../model/product.model';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    ListItemComponent
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent implements OnInit{
  @Output() onAddToCartFromList = new EventEmitter<any>();


  constructor(private productService: ProductService) {
  }

  products!: product[];


  ngOnInit() {
    this.products = this.productService.products;
  }
}
