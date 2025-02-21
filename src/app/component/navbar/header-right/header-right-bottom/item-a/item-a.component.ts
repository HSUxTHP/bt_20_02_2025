import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-item-a',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './item-a.component.html',
  styleUrl: './item-a.component.scss'
})
export class ItemAComponent {
  @Input()src!: string;
}
