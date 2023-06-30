import { Component } from '@angular/core';
import { CartService } from '../../service/cart.service';
import { Cart } from 'src/app/model/cart.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cartItems: Cart[] = []
  total: number = 0

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems()
  }
  onChangeQuantity(index: number, product: any, event: any): void {
    const newProduct = { ...product, quantity: parseInt(event.target.value) }
    this.cartService.updateProductCart(newProduct)
    this.cartItems[index].quantity = parseInt(event.target.value)
  }

  checkAll(e: any) {

    if (e.target.checked) {
      this.cartItems.map(item => item).reduce((sum, item) => {
        return this.total = sum + item.price * item.quantity
      }, this.total)
    } else {
      this.total = 0
    }

  }

  checkItem(e: any) {
    const id = e.target.value
    const isChecked = e.target.checked

    const mapArr = this.cartItems.map((item) => {
      if (item.id == id) {
        item.check = isChecked
        return item
      }
      return item
    })
    console.log(mapArr);


    // this.cartItems.filter((item) => {
    //   console.log(item.check == true );


    // })
    // console.log(this.cartItems);

  }

  removeItem(idx: number) {
    Swal.fire({
      title: 'Bạn có chắc chắn xóa không?',
      text: 'Sản phẩm sẽ không còn trong giỏ hàng của bạn!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Tôi đồng ý',
      cancelButtonText: 'Không đồng ý',
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.removeCart(idx)
      }
    })
  }

}
