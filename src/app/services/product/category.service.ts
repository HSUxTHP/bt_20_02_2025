import { Injectable } from '@angular/core';
import {category} from '../../model/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  categorys: category [] =[
    {
      id: 1,
      src: "image/MENU_DAT_HANG_BESTSELLER.jpg",
      name: "Bestseller"
    },
    {
      id: 2,
      src: "image/MENU_DAT_HANG_KHUYE_N_MA_I_2.jpg",
      name: "Khuyễn mãi"
    },
    {
      id: 3,
      src: "image/MENU_DAT_HANG_THU_C_UO_NG_new_3.jpg",
      name: "Thức Uống"
    },
    {
      id: 4,
      src: "image/MENU_DAT_HANG_THU_C_A_N_NHE__2.jpg",
      name: "Thức Ăn Nhẹ"
    },
    {
      id: 5,
      src: "image/BG-Menu-Chicken-01-01_1.jpg",
      name: "Cơm - Mì Ý"
    },
    {
      id: 6,
      src: "image/MENU_DAT_HANG_PHA_N_A_N_NHO_M.jpg",
      name: "Phần Ăn Nhóm"
    },
    {
      id: 7,
      src: "image/MENU_DAT_HANG_PHA_N_A_N_NHO_M.jpg",
      name: "Value"
    },
    {
      id: 8,
      src: "image/MENU_DAT_HANG_VALUE_m_i_3.jpg",
      name: "Combo"
    },
    {
      id: 9,
      src: "image/MENU_DAT_HANG_COMBO_m_i_2.jpg",
      name: "Gà Rán Phần"
    },
    {
      id: 10,
      src: "image/MENU_DAT_HANG_GA_RA_N_PHA_N_1.jpg",
      name: "Gà Rán"
    },
  ]
}
