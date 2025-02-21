import { Component } from '@angular/core';
import {BodyComponent} from '../../component/body/body.component';
import {FooterComponent} from '../../component/footer/footer.component';
import {NavbarComponent} from '../../component/navbar/navbar.component';
import {product} from '../../model/product.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BodyComponent,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() {

  }


}
