import { Injectable } from '@angular/core';
import {ProductService} from './product.service';
import {BehaviorSubject, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<any[]>([]);
  cart$ = this.cart.asObservable();

  addToCart(item: any) {
    let updatedCart = [...this.cart.value];
    const index = updatedCart.findIndex(product => product.id === item.id);

    if (index !== -1) {
      updatedCart[index].quantity += 1; // Tăng số lượng nếu sản phẩm đã có trong giỏ hàng
    } else {
      updatedCart.push({...item, quantity: 1}); // Thêm mới với quantity = 1
    }

    this.cart.next(updatedCart);
  }

  removeFromCart(itemId: number) {
    let updatedCart = this.cart.value.filter(item => item.id !== itemId);
    this.cart.next(updatedCart);
  }

  increaseQuantity(itemId: number) {
    let updatedCart = this.cart.value.map(item => {
      if (item.id === itemId) {
        return {...item, quantity: item.quantity + 1};
      }
      return item;
    });
    this.cart.next(updatedCart);
  }

  decreaseQuantity(itemId: number) {
    let updatedCart = this.cart.value.map(item => {
      if (item.id === itemId) {
        return {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1};
      }
      return item;
    });
    this.cart.next(updatedCart);
  }

  getCart() {
    return this.cart$;
  }

  getTotalQuantity() {
    return this.cart$.pipe(
      map(cart => cart.reduce((total, item) => total + item.quantity, 0))
    );
  }
}
