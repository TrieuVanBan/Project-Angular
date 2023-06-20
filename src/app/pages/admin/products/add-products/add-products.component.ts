import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/model/product.model';
import { ToastrService } from 'ngx-toastr';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {
  data: Category[] = [];

  validPro = this.builderForm.group({
    "name": ["", [Validators.required, Validators.minLength(8)]],
    "price": ["", [Validators.required]],
    "image": ["", [Validators.required]],
    "cateId": ["", [Validators.required]]
  })

  get funcControl() {
    return this.validPro.controls
  }

  constructor(private restapiService: RestapiService, private router: Router, private builderForm: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllCate()
  }

  // all category
  getAllCate() {
    this.restapiService.listCategory().subscribe((res: any) => {
      this.data = res
      // console.log(res);
    })
  }

  addProduct(value: any) {
    console.log(value);

    this.restapiService.addProduct(value).subscribe((res) => {
      // console.log(res);
      this.toastr.success("Thêm sản phẩm thành công !", "Success")
      this.router.navigateByUrl("/admin/products")
    })
  }

}
