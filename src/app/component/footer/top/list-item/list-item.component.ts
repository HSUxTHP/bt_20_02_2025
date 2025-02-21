import {Component, Input} from '@angular/core';
import {ItemComponent} from './item/item.component';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    ItemComponent
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {

  @Input()title!: string;
  @Input() items!: { href: string; name: string }[]; // Sửa lại kiểu dữ liệu
}
