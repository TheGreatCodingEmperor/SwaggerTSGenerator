import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/api/services';
import * as _ from 'lodash';
import { PaginatorEnhancerComponent } from 'src/app/shared/components/paginator-enhancer.component';
import { NgForm } from '@angular/forms';
import { CrudDialogComponent } from 'src/app/shared/components/crud-dialog/crud-dialog.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, AfterViewInit {
  @ViewChild(PaginatorEnhancerComponent) paginator: PaginatorEnhancerComponent;
  @ViewChild(CrudDialogComponent) dialog: CrudDialogComponent;
  editDialog = false;
  loading = false;
  editModel:any = {};
  datas: any[] = [];
  conditions: any = {};

  formfieldBasicProps = { style: 'color:red;', disabled: false, events: { keyup: this.onChange } };

  constructor(
    public orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paginator.search();
  }

  loadDatas(event: any) {
    this.orderService.apiOrderGet$Json$Response(event).subscribe(res => {
      this.datas = res.body.list;
      this.paginator.pageInfo.total = res.body.count;
    })
  }

  save(isAdd:boolean) {
    this.loading = true;
    let action = isAdd ? this.orderService.apiOrderPost({body:this.editModel}) : this.orderService.apiOrderPut({ key: this.editModel.id, body: this.editModel });
    action.subscribe(res => {
      this.paginator.loadDatas();
      this.editDialog = false;
    }).add(() => { this.loading = false });
  }

  onChange(event) {
    console.log(event.target.value);
  }
}
