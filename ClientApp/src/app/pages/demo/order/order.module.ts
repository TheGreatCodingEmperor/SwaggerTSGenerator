import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderComponent } from './order.component';
import { APP_PRIMENG_MODULES } from 'src/app/shared/app-primeng-modules';
import { APP_FORMS_MODULS } from 'src/app/shared/forms-modules';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    APP_PRIMENG_MODULES,
    APP_FORMS_MODULS,
    RouterModule.forChild([
      { path:'',component:OrderComponent }
    ])
  ]
})
export class OrderModule { }
