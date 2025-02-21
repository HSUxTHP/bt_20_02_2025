import { Component } from '@angular/core';
import {ItemLinkComponent} from './item-link/item-link.component';

@Component({
  selector: 'app-header-left',
  standalone: true,
  imports: [
    ItemLinkComponent,
  ],
  templateUrl: './header-left.component.html',
  styleUrl: './header-left.component.scss'
})
export class HeaderLeftComponent {
   items = [
    {
      path: '/home',
      Name: 'ĐẶT HÀNG'
    },
    {
      path: '/franchise',
      Name: 'NHƯỢNG QUYỀN'
    },
    {
      path: '/store',
      Name: 'CỬA HÀNG'
    },
    {
      path: '/story',
      Name: 'VỀ LOTTERIA'
    }
  ];
}
