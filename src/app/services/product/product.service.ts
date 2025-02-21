import {Injectable} from '@angular/core';
import {product} from '../../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  products: product [] = [
    {
      id: 1,
      src:'image/pack_loy_set_1.png.webp',
      name:'Loy Set',
      item1:'02 Gà rán',
      item2:'01 Burger Bulgogi',
      price:'145.000',
      oldprice:'177.000',
    },
    {
      id: 2,
      src:'image/pack_lody_set_4.png.webp',
      name:'Lody Set',
      item1:'02 Gà rán',
      item2:'01 Mì ý',
      price:'145.000',
      oldprice:'169.000',
    },
    {
      id: 3,
      src:'image/pack_lony_set_3_1_.png.webp',
      name:'Lony Set',
      item1:'02 Gà rán',
      item2:'01 Burger Bulgogi',
      price:'195.000',
      oldprice:'237.000',
    },
    {
      id: 4,
      src:'image/pack_loking_set_2_.png.webp',
      name:'Loy Set',
      item1:'02 Gà rán',
      item2:'01 Mì ý',
      price:'220.000',
      oldprice:'273.000',
    },
    {
      id: 5,
      src:'image/pack_l4_set_3_1_.png.webp',
      name:'Loy Set',
      item1:'04 Gà rán',
      item2:'01 Burger Bulgogi',
      price:'280.000',
      oldprice:'337.000',
    },
  ];

  getProductById(id: string){
    return this.products.find(product => product.id === Number(id));
  }

}
