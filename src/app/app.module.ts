import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ClientComponent } from './layouts/client/client.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NewsComponent } from './pages/news/news.component';
import { RegiterComponent } from './pages/regiter/regiter.component';
import { LoginComponent } from './pages/login/login.component';
import { ListCategoryComponent } from './pages/admin/category/list-category/list-category.component';
import { AddCategoryComponent } from './pages/admin/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './pages/admin/category/update-category/update-category.component';
import { ListProductsComponent } from './pages/admin/products/list-products/list-products.component';
import { AddProductsComponent } from './pages/admin/products/add-products/add-products.component';
import { UpdateProductsComponent } from './pages/admin/products/update-products/update-products.component';
import { ListUserComponent } from './pages/admin/users/list-user/list-user.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    AdminComponent,
    HomeComponent,
    ProductsComponent,
    SidebarComponent,
    DetailComponent,
    NewsComponent,
    RegiterComponent,
    LoginComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,
    ListProductsComponent,
    AddProductsComponent,
    UpdateProductsComponent,
    ListUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
