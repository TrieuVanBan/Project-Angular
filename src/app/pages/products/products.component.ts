import { Component } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  cateId: any
  data: Product[] = [];
  dataProduct: any

  constructor(private restapiService: RestapiService, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAll();
    this.activateRoute.paramMap.subscribe(params => {
      this.cateId = params.get('id');
      console.log(this.cateId);
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
}
