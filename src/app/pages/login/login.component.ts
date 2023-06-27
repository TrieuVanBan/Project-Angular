import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/service/restapi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  userData: any

  constructor(private builderForm: FormBuilder, private restApi: RestapiService, private router: Router, private toastr: ToastrService) {
  }

  loginForm = this.builderForm.group({
    email: this.builderForm.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builderForm.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
  })


  loginOnsubmit() {
    this.restApi.login(this.loginForm.value).subscribe((res: any) => {
      localStorage.setItem('user', JSON.stringify(res));
      this.userData = res
      console.log(res.user);

      this.toastr.success("Bạn đã đăng nhập thành công !", "Success")
      if (res.user.role === 1) {
        this.router.navigateByUrl("/admin")
      }
    })
  }

}
