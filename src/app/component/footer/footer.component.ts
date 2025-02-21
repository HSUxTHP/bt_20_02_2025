import { Component } from '@angular/core';
import {TopComponent} from './top/top.component';
import {BottomComponent} from './bottom/bottom.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    TopComponent,
    BottomComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
