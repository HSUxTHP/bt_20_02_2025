import {Component, Input} from '@angular/core';
import {HeaderLeftComponent} from './header-left/header-left.component';
import {HeaderRightComponent} from './header-right/header-right.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    HeaderLeftComponent,
    HeaderRightComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Input() itemInCart = 0;
}
