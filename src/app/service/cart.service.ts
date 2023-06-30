import { Injectable } from '@angular/core';
import { Cart } from '../model/cart.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  items: Cart[] = [];

  constructor() {
    const products = localStorage.getItem("productCart")
    if (products) {
      this.items = JSON.parse(products);
    }
  }
  ngOnInit(): void {
    // this.getProductCatId(this.cateId);
  }
  
  addToCart(product: Cart) {
    const proExits = this.items.find(item => item.id === product.id);
    if (!proExits) {
      this.items.push(product);
    } else {
      proExits.quantity += product.quantity;
    }
    localStorage.setItem('productCart', JSON.stringify(this.items));
  }

  updateProductCart(product: Cart) {
    this.items = this.items.map(item => item.id == product.id ? product : item);
    localStorage.setItem('productCart', JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  removeCart(index:number) {
    this.items.splice(index, 1)
    localStorage.setItem('productCart', JSON.stringify(this.items));
  }
}
