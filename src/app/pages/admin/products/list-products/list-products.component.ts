import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  data: Product[] = [];

  constructor(private restapiService: RestapiService) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  // all products
  getAllProducts() {
    this.restapiService.listProduct().subscribe((res: any) => {
      this.data = res
      // console.log(res);
    })
  }

  removeProduct(id: any) {
    this.restapiService.removeProduct(id).subscribe((res: any) => {
      this.data = res;
      // console.log(res);
      this.getAllProducts()
    })
  }

}
