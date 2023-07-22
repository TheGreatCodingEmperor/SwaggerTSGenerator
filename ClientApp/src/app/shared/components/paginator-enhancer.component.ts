import { Component, Directive, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Paginator } from 'primeng/paginator';
import { Subscription, of } from 'rxjs';
import * as _ from 'lodash';

enum orderState{
  asc = 1,
  desc = 2
}

@Component({
  selector: 'paginatorEnhancer',
  template:`
  <p-paginator [rows]="pageInfo.pageSize" [totalRecords]="pageInfo.total" [rowsPerPageOptions]="[5,20,30]" (onPageChange)="onPageChange($event)"></p-paginator>`
})
export class PaginatorEnhancerComponent {
  @ViewChild(Paginator)paginator:Paginator;
  pageInfo = {
    page:1,
    pageSize:5,
    total:0,
  }
  private filterConditions: any = {};
  @Input() conditions: any = {};
  @Input() orderBy:string = '';
  orderState = orderState.asc;
  @Output() conditionsChange = new EventEmitter();
  // @Input() queryFunction: any;
  @Output() onLoadData: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  onOrderBy(field:string){
    if(this.orderBy == field){
      if(this.orderState == orderState.asc){
        this.orderState = orderState.desc;
      }
      else{
        this.orderState = orderState.asc;
      }
    }
    this.orderBy = field;
    this.loadDatas();
  }

  search(){
    // 查詢條件確認
    this.filterConditions = _.cloneDeep(this.conditions);
    this.pageInfo.page = 1;
    this.paginator.first = 0;
    this.loadDatas();
  }

  loadDatas(){
    // 查詢條件未確認，顯示復原為查詢條件
    this.conditions = _.cloneDeep(this.filterConditions);
    this.conditionsChange.emit(_.cloneDeep(this.conditions));

    let request = {orderBy:this.orderBy,orderDesc:this.orderState==orderState.desc};
    // // 頁數
    Object.assign(request,this.pageInfo);
    // // 查詢條件
    Object.assign(request,this.filterConditions);
    this.onLoadData.emit(request);
  }

  onPageChange(event:any){
    this.pageInfo.page = event.page+1;
    this.pageInfo.pageSize = event.rows;
    this.loadDatas();
  }
}
