import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: any

  constructor() { }

  ngOnInit(): void {
    let localUser = localStorage.getItem("user")
    if (localUser) {
      this.user = JSON.parse(localUser)
    }
    this.user = this.user.user.email
    console.log(this.user);
  }
}
