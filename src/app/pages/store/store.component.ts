import { Component } from '@angular/core';
import {NavbarComponent} from '../../component/navbar/navbar.component';
import {BodyComponent} from '../../component/body/body.component';
import {FooterComponent} from '../../component/footer/footer.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    NavbarComponent,
    BodyComponent,
    FooterComponent
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {

}
