import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Category } from '../model/product.model';

// const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  listProduct(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products/")
  }

  listCategory(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:3000/category")
  }

  addCategory(dataCate: any) {
    return this.http.post("http://localhost:3000/category", dataCate)
  }

  removeCategory(id:number) {
    return this.http.delete("http://localhost:3000/category/"+ id)
  }

  getProById(id: any) {
    return this.http.get("http://localhost:3000/products/" + id)
  }

  listProductByCate(cateId: any) {
    return this.http.get<Product[]>(`http://localhost:3000/products?cateId=${cateId}`)
  }
}
