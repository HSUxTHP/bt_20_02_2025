import {Component} from '@angular/core';
import {ListItemComponent} from './list-item/list-item.component';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [
    ListItemComponent
  ],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss'
})
export class TopComponent {

  models = [
    {
      title: 'THÔNG TIN',
      items: [
        {
          href: '#',
          name: 'Tin tức',
        },
        {
          href: '#',
          name: 'Khuyến mãi',
        },
        {
          href: '#',
          name: 'Tuyển dụng',
        },
        {
          href: '#',
          name: 'Nhượng quyền',
        },
      ],
    },
    {
      title: 'HỖ TRỢ',
      items: [
        {
          href: '#',
          name: 'Điều khoản sử dụng',
        },
        {
          href: '#',
          name: 'Chính sách bảo mật',
        },
        {
          href: '#',
          name: 'Chính sách giao hàng',
        },
        {
          href: '#',
          name: 'Chăm sóc khách hàng',
        },
      ],
    }
  ]

}
