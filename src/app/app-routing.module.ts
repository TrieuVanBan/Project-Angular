import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './layouts/client/client.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NewsComponent } from './pages/news/news.component';
import { RegiterComponent } from './pages/regiter/regiter.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { ListCategoryComponent } from './pages/admin/category/list-category/list-category.component';
import { ListProductsComponent } from './pages/admin/products/list-products/list-products.component';
import { ListUserComponent } from './pages/admin/users/list-user/list-user.component';
import { AddCategoryComponent } from './pages/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/category/update-category/update-category.component';
import { AddProductsComponent } from './pages/admin/products/add-products/add-products.component';
import { UpdateProductsComponent } from './pages/admin/products/update-products/update-products.component';

const routes: Routes = [
  {
    path: '',
    component: ClientComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/:id',
        component: ProductsComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'detail/:id',
        component: DetailComponent,
      },
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'category',
        component: ListCategoryComponent,
      },
      {
        path: 'category/add',
        component: AddCategoryComponent,
      },
      {
        path: 'category/update/:id',
        component: UpdateCategoryComponent,
      },
      {
        path: 'products',
        component: ListProductsComponent,
      },
      {
        path: 'products/add',
        component: AddProductsComponent,
      },
      {
        path: 'products/update/:id',
        component: UpdateProductsComponent,
      },
      {
        path: 'users',
        component: ListUserComponent,
      }
    ]
  },
  {
    path: 'register',
    component: RegiterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
