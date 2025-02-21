import {Component, OnInit} from '@angular/core';
import {CardComponent} from './card/card.component';
import {product} from '../../../model/product.model';
import {category} from '../../../model/category.model';
import {CategoryService} from '../../../services/product/category.service';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent implements OnInit{

  categorys!: category[];

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categorys = this.categoryService.categorys;
  }
}
