import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss']
})
export class UpdateCategoryComponent implements OnInit {

  constructor(private restapiService: RestapiService, private router: Router) { }

  ngOnInit(): void {

  }

  updateCategory(value: any) {
    this.restapiService.addCategory(value).subscribe((res: any) => {
      // console.log(res);
      // this.router.navigateByUrl("/admin/category")
    })
  }
}
