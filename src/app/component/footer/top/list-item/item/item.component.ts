import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {

    @Input()name!: string;
    @Input()href!: string;
}
