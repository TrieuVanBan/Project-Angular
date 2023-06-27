import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, Category } from '../model/product.model';
import { Auth } from '../model/auth.model';

// const apiUrl = 'http://localhost:3000/products';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  // product
  listProduct(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:3000/products/")
  }

  getProById(id: any) {
    return this.http.get("http://localhost:3000/products/" + id)
  }

  listProductByCate(cateId: any) {
    return this.http.get<Product[]>(`http://localhost:3000/products?cateId=${cateId}`)
  }

  addProduct(dataPro: any) {
    return this.http.post("http://localhost:3000/products", dataPro)
  }

  removeProduct(id: number) {
    return this.http.delete("http://localhost:3000/products/" + id)
  }

  getIdPro(id: string) {
    return this.http.get<Product>("http://localhost:3000/products/" + id)
  }

  updatePro(dataPro: any) {
    return this.http.put<Product[]>("http://localhost:3000/products/" + dataPro.id, dataPro)
  }

  // category
  listCategory(): Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:3000/category")
  }

  addCategory(dataCate: any) {
    return this.http.post("http://localhost:3000/category", dataCate)
  }

  removeCategory(id: number) {
    return this.http.delete("http://localhost:3000/category/" + id)
  }

  getIdCate(id: string) {
    return this.http.get<Category>("http://localhost:3000/category/" + id)
  }

  updateCate(dataCate: any) {
    return this.http.put<Category[]>("http://localhost:3000/category/" + dataCate.id, dataCate)
  }

  // user
  listUsers(): Observable<Auth[]> {
    return this.http.get<Auth[]>("http://localhost:3000/users")
  }

  register(dataUser: any) {
    return this.http.post("http://localhost:3000/register", dataUser)
  }

  // Login
  login(user: any) {
    return this.http.post("http://localhost:3000/login" , user)
  }
}
