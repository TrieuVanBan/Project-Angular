import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  user: any;
  nameUser: string = ""

  constructor(private toastr: ToastrService, private router: Router) {
  }

  ngOnInit() {
    let localUser = localStorage.getItem("user")

    if (localUser) {
      this.user = JSON.parse(localUser)
      if (this.user.user.role === 1) {
        this.nameUser = this.user.user.email
        this.router.navigateByUrl("/admin/products")
      } else {
        this.router.navigateByUrl("/")
      }
    } else {
      this.router.navigateByUrl("/")
    }
  }

  logOut() {
    localStorage.removeItem("user");
    this.toastr.success("Đăng xuất thành công!", "Success")
    this.router.navigateByUrl("/login")
  }
}
