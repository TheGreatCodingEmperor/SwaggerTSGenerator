import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/api/services';
import * as _ from 'lodash';
import { PaginatorEnhancerComponent } from 'src/app/shared/components/paginator-enhancer.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, AfterViewInit {
  @ViewChild(PaginatorEnhancerComponent) paginator: PaginatorEnhancerComponent;
  datas: any[] = [];

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paginator.search(); 
  }

  loadDatas(event:any){
    this.orderService.apiOrderGet$Json$Response(event).subscribe(res => {
      this.datas = res.body.list;
      this.paginator.pageInfo.total = res.body.count;
    })
  }
}
