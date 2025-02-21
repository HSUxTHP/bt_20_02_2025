import {Component, EventEmitter, Output} from '@angular/core';
import {BarComponent} from './bar/bar.component';
import {PagePointComponent} from './page-point/page-point.component';
import {ListComponent} from './list/list.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    BarComponent,
    PagePointComponent,
    ListComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {


}
