import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  constructor(private restapiService: RestapiService, private router: Router, private builderForm: FormBuilder) { }

  nameCate = this.builderForm.group({
    "name": ["", [Validators.required, Validators.minLength(8)]]
  })

  get funcControl() {
    return this.nameCate.controls
  }

  ngOnInit(): void {

  }

  addCategory(value: any) {
    this.restapiService.addCategory(value).subscribe((res: any) => {
      // console.log(res);
      this.router.navigateByUrl("/admin/category")
    })

  }
}
