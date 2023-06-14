import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  constructor(private restapiService: RestapiService, private activateRoute: ActivatedRoute) { }
  id: any
  itemPro: any

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      // console.log(this.id);
      this.getProductById(this.id)
    })

  }

  getProductById(id: any) {
    this.restapiService.getProById(id).subscribe((res: any) => {
      this.itemPro = res
      // console.log(res);
    })
  }

}
