import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-regiter',
  templateUrl: './regiter.component.html',
  styleUrls: ['./regiter.component.scss']
})
export class RegiterComponent implements OnInit {
  // registerForm: FormGroup;

  constructor(private builderForm: FormBuilder, private restApi: RestapiService, private router: Router, private toastr: ToastrService) {

  }

  ngOnInit(): void {

  }

  registerForm = this.builderForm.group({
    // id:this.builderForm.control('', Validators.compose([Validators.required])),
    email: this.builderForm.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.builderForm.control('', Validators.compose([Validators.required, Validators.minLength(8)])),
    confirmPassword: this.builderForm.control('', Validators.compose([Validators.required])),
    role: this.builderForm.control('')
  },
    { validators: this.Mutmatch('password', 'confirmPassword') }
  )


  get funcControl() {
    return this.registerForm.controls
  }

  Mutmatch(password: any, conpassword: any) {
    return (formgroup: FormGroup) => {
      const passwordcontrol = formgroup.controls[password]
      const conpasswordcontrol = formgroup.controls[conpassword]

      if (conpasswordcontrol.errors && !conpasswordcontrol.errors['Mutmatch']) {
        return;
      }

      if (passwordcontrol.value !== conpasswordcontrol.value) {
        conpasswordcontrol.setErrors({ Mutmatch: true })
      } else {
        conpasswordcontrol.setErrors(null)
      }
    }
  }

  registerOnsubmit() {
    if (this.registerForm.valid) {
      const data = this.registerForm.value;
      const { email, password, role } = data
      // console.log({ email: data.email, password: data.password });
      this.restApi.register({ email, password, role }).subscribe((res: any) => {
        // console.log(res);
        this.toastr.success("Bạn đã đăng ký thành công !", "Success")
        this.router.navigateByUrl("/login")
      })
    } else {
      this.toastr.warning("Bạn hãy nhập dữ liệu !", "Warning")
    }
  }
}
