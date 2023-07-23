import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from 'src/app/api/services';
import * as _ from 'lodash';
import { PaginatorEnhancerComponent } from 'src/app/shared/components/paginator-enhancer.component';
import { NgForm } from '@angular/forms';
import { CrudDialogComponent } from 'src/app/shared/components/crud-dialog/crud-dialog.component';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { catchError, map, throwError } from 'rxjs';
import { ConfirmationService } from 'primeng/api';

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
  editModel: any = {};
  datas: any[] = [];
  conditions: any = {};

  constructor(
    public orderService: OrderService,
    private utilities: UtilitiesService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.paginator.search();
  }

  clearConditions() {
    this.conditions = {};
    setTimeout(() => {
      this.paginator.search();
    }, 1);
  }

  loadDatas(event: any) {
    this.orderService.apiOrderGet$Json$Response(event).subscribe(res => {
      this.datas = res.body.list;
      this.paginator.pageInfo.total = res.body.count;
    })
  }

  delete(item: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: '確認執行此動作?',
      acceptLabel:'是',
      rejectLabel:'否',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.loading = true;
        this.orderService.apiOrderKeyDelete({ key: item.id }).pipe(
          this.utilities.basicMessage()
        ).subscribe(() => { }).add(() => {
          this.loading = false;
          this.paginator.loadDatas();
        });
      },
      reject: () => {
        //reject action
      }
    });

  }

  save(isAdd: boolean) {
    this.loading = true;
    let action = isAdd ? this.orderService.apiOrderPost({ body: this.editModel }) : this.orderService.apiOrderPut({ key: this.editModel.id, body: this.editModel });
    action
      .pipe(
        this.utilities.basicMessage()
      )
      .subscribe(res => {
        this.editDialog = false;
      }).add(() => {
        this.paginator.loadDatas();
        this.loading = false
      });
  }
}
