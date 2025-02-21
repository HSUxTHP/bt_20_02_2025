import { Component } from '@angular/core';
import {NavbarComponent} from '../../component/navbar/navbar.component';
import {FooterComponent} from '../../component/footer/footer.component';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './story.component.html',
  styleUrl: './story.component.scss'
})
export class StoryComponent {

}
