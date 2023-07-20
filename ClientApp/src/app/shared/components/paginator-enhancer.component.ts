import { Component, Directive, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Paginator } from 'primeng/paginator';
import { Subscription, of } from 'rxjs';
import * as _ from 'lodash';

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
  @Input() filterConditions: any = {
    display:{},
    query:{}
  };
  // @Input() queryFunction: any;
  @Output() onLoadData: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  

  search(){
    // 查詢條件確認
    this.filterConditions.query = _.cloneDeep(this.filterConditions.display);
    this.pageInfo.page = 1;
    this.loadDatas();
  }

  loadDatas(){
    // 查詢條件未確認，顯示復原為查詢條件
    this.filterConditions.display = _.cloneDeep(this.filterConditions.query);

    let request = {};
    // // 頁數
    Object.assign(request,this.pageInfo);
    // // 查詢條件
    Object.assign(request,this.filterConditions.query);
    this.onLoadData.emit(request);
  }

  onPageChange(event:any){
    this.pageInfo.page = event.page+1;
    this.pageInfo.pageSize = event.rows;
    this.loadDatas();
  }
}
