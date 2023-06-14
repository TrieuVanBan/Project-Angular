import { Component } from '@angular/core';
import { Category } from 'src/app/model/product.model';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent {
  data: Category[] = [];
  id: any;

  constructor(private restapiService: RestapiService) { }

  ngOnInit(): void {
    this.getAllCate();
  }

  // all category
  getAllCate() {
    this.restapiService.listCategory().subscribe((res: any) => {
      this.data = res
      // console.log(res);
    })
  }

  // delete category
  removeCate(id: any) {
    this.restapiService.removeCategory(id).subscribe((res: any) => {
      this.data = res
      this.getAllCate();
      // console.log(this.data);
    })
  }
}
