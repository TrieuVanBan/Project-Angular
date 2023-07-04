import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/model/product.model';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from 'src/app/service/restapi.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  cateId: any;
  data: Product[] = [];
  dataProduct: any;
  searchText =  ""

  constructor(private restapiService: RestapiService, private activateRoute: ActivatedRoute, private cartService: CartService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAll();
    this.activateRoute.paramMap.subscribe(params => {
      this.cateId = params.get('id');
      this.getProductCatId(this.cateId);
    })
    // this.getProductCatId(this.cateId);
  }

  getAll() {
    this.restapiService.listProduct().subscribe((res: any) => {
      this.data = res
      console.log(res);
    })
  }

  getProductCatId(id: any) {
    if (id) {
      this.restapiService.listProductByCate(id).subscribe((res: any) => {
        console.log(res)
        this.data = res
      })
    }
  }

  addProductToCart(product: any) {
    let cartItem: any = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      check: product.check = false
    }
    this.cartService.addToCart(cartItem)
    this.toastr.success("Sản phẩm đã được thêm vào giỏ hàng !", "Success")
  }
}
