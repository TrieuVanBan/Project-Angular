import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/service/cart.service';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  constructor(private restapiService: RestapiService, private activateRoute: ActivatedRoute, private cartService: CartService, private toastr: ToastrService) { }
  id: any
  itemPro: any
  quantity: number = 1

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      // console.log(this.id);
      this.getProductById(this.id)
    })

  }

  getProductById(id: any) {
    this.restapiService.getProById(id).subscribe((res: any) => {
      // console.log(res);
      this.itemPro = res
    })
  }

  addProductToCart(product: any) {
    let cartItem: any = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: this.quantity,
      check: product.check = false
    }
    const a = this.cartService.addToCart(cartItem)
    console.log(cartItem);

    this.toastr.success("Sản phẩm đã được thêm vào giỏ hàng !", "Success")
  }

  onChaneQuantity(product: any, e: any) {
    this.quantity = parseInt(e.target.value)
    const newQuantity = { ...product, quantity: parseInt(e.target.value) }
    this.cartService.updateProductCart(newQuantity)
  }

}
