import { Component } from '@angular/core';
import {NavbarComponent} from '../../component/navbar/navbar.component';
import {BodyComponent} from '../../component/body/body.component';
import {FooterComponent} from '../../component/footer/footer.component';

@Component({
  selector: 'app-franchise',
  standalone: true,
  imports: [
    NavbarComponent,
    BodyComponent,
    FooterComponent
  ],
  templateUrl: './franchise.component.html',
  styleUrl: './franchise.component.scss'
})
export class FranchiseComponent {

}
