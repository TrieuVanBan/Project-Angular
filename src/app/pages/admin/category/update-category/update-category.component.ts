import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/model/product.model';
import { ToastrService } from 'ngx-toastr';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {
  cateData: undefined | Category;
  id: any

  nameCate = this.builderForm.group({
    "name": ["", [Validators.required, Validators.minLength(8)]]
  })

  get funcControl() {
    return this.nameCate.controls
  }

  constructor(private restapiService: RestapiService, private router: ActivatedRoute, private navigate: Router, private builderForm: FormBuilder,private toastr: ToastrService) { }

  ngOnInit(): void {
    let cateId = this.router.snapshot.paramMap.get("id");
    cateId && this.restapiService.getIdCate(cateId).subscribe((data) => {
      // console.log(data);
      this.cateData = data
    })
    this.id = cateId
  }

  updateCategory(value: any) {
    this.restapiService.updateCate({ ...value, id: this.id }).subscribe((res: any) => {
      // console.log(res);
      this.toastr.success("Cập nhật thành công !", "Success")
      this.navigate.navigateByUrl("/admin/category")
    })
  }
}
