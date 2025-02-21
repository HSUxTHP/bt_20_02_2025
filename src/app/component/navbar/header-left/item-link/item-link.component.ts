import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-item-link',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './item-link.component.html',
  styleUrl: './item-link.component.scss'
})
export class ItemLinkComponent {
  @Input() Name! : string;
  @Input() path! : string;
}
