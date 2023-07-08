import { Component } from '@angular/core';
import { Category } from 'src/app/model/product.model';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  data: Category[] = [];

  constructor(private restapiService: RestapiService) { }

  ngOnInit(): void {
    this.getAllCate();
  }

  getAllCate() {
    this.restapiService.listCategory().subscribe((res: any) => {
      this.data = res
      // console.log(res);
    })
  }
}
