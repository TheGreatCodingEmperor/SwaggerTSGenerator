import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { APP_PRIMENG_MODULES } from 'src/app/shared/modules/app-primeng-modules';
import { APP_FORMS_MODULS } from 'src/app/shared/modules/forms-modules';
import { RouterModule } from '@angular/router';
import { SharedMasterModule } from 'src/app/shared/shared-master.module';
import {MessageService} from 'primeng/api';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    SharedMasterModule,
    APP_FORMS_MODULS,
    RouterModule.forChild([
      { path:'',component:OrderComponent }
    ])
  ],
  providers:[
    MessageService
  ]
})
export class OrderModule { }
