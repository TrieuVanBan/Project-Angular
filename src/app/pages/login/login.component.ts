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

    this.restApi.getUserByEmail(this.loginForm.value.email).subscribe((res: any) => {
      this.userData = res
      console.log(this.userData);

      // this.toastr.success("Bạn đã đăng ký thành công !", "Success")
      // this.router.navigateByUrl("/login")
    })
  }

}
