import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import { Product } from 'src/app/model/product.model';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {
  data: Product[] = [];
  p: number = 1

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Product>(this.data);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private restapiService: RestapiService) { }

  ngOnInit(): void {
    this.getAllProducts()
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
