import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {FranchiseComponent} from './pages/franchise/franchise.component';
import {StoreComponent} from './pages/store/store.component';
import {StoryComponent} from './pages/story/story.component';
import {DetailComponent} from './pages/detail/detail.component';
import {CartComponent} from './pages/cart/cart.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'franchise',
    component: FranchiseComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'story',
    component: StoryComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];
