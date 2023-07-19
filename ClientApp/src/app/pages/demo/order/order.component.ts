import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/api/services';
import * as _ from 'lodash';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  datas:any[] = [];

  constructor(
    private orderService:OrderService
  ) { }

  ngOnInit(): void {
    this.loadDatas(); 
  }

  pageInfo = {
    page:1,
    pageSize:10,
    total:0,
  }

  filterConditions ={
    display:{},
    query:{}
  }

  search(){
    // 查詢條件確認
    this.filterConditions.query = _.cloneDeep(this.filterConditions.display);
    this.loadDatas();
  }

  loadDatas(  ){
    // 查詢條件未確認，顯示復原為查詢條件
    this.filterConditions.display = _.cloneDeep(this.filterConditions.query);

    let request = {};
    // 頁數
    Object.assign(request,this.pageInfo);
    // 查詢條件
    Object.assign(request,this.filterConditions.query);
    this.orderService.apiOrderGet$Json$Response(request).subscribe(res => {
      // this.datas = res.body;
      this.datas = res.body.list;
      this.pageInfo.total = res.body.count;
    })
  }

  paginate(event:any){
    console.log(event);
    this.pageInfo.page = event.page+1;
    this.pageInfo.pageSize = event.rows;
    this.loadDatas();
  }

  query(){

  }

}
