import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, Product } from 'src/app/model/product.model';
import { ToastrService } from 'ngx-toastr';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {
  dataCate: Category[] = []
  proData: undefined | Product
  id: any

  validPro = this.builderForm.group({
    "name": ["", [Validators.required, Validators.minLength(8)]],
    "price": ["", [Validators.required]],
    "image": ["", [Validators.required]],
    "cateId": ["", [Validators.required]]
  })

  get funcControl() {
    return this.validPro.controls
  }

  constructor(private restapiService: RestapiService, private router: ActivatedRoute, private navigate: Router, private builderForm: FormBuilder, private toastr: ToastrService) { }

  ngOnInit(): void {
    // console.log(this.proData);
    this.getAllCate()
    let proId = this.router.snapshot.paramMap.get("id");
    proId && this.restapiService.getIdPro(proId).subscribe((data) => {
      console.log(data);
      this.proData = data
    });

    this.id = proId

  }

  // all category
  getAllCate() {
    this.restapiService.listCategory().subscribe((res: any) => {
      this.dataCate = res
      // console.log(res);
    })
  }

  updateProduct(value: any) {
    this.restapiService.updatePro({ ...value, id: this.id }).subscribe((res: any) => {
      // console.log(res);
      this.toastr.success("Cập nhật thành công !", "Success")
      this.navigate.navigateByUrl("/admin/products")
    })
  }
}
