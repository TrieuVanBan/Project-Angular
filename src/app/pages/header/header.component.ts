import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: any

  constructor(private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    let localUser = localStorage.getItem("user")
    if (localUser) {
      this.user = JSON.parse(localUser)
    }
    this.user = this.user.user.email
  }

  logOut() {
    let localUser = localStorage.getItem("user")
    if (localUser) {
      localStorage.removeItem("user");
      this.toastr.success("Đăng xuất thành công!", "Success")
      this.router.navigateByUrl("/login")
    } else {
      this.toastr.warning("Tài khoản chưa đăng nhập!", "Warning")
    }
  }
}
