import { Component, OnInit } from '@angular/core';
import { Auth } from "src/app/model/auth.model";
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  p: number = 1
  users: Auth[] = []
  
  constructor(private restapiService: RestapiService) { }

  ngOnInit(): void {
    this.getAllUsers()
  }

  getAllUsers() {
    this.restapiService.listUsers().subscribe((res: any) => {
      this.users = res
    })
  }
}
