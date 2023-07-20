import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorEnhancerComponent } from '../../components/paginator-enhancer.component';
import { APP_PRIMENG_MODULES } from '../app-primeng-modules';



@NgModule({
  declarations: [
    PaginatorEnhancerComponent
  ],
  imports: [
    APP_PRIMENG_MODULES,
  ],
  exports:[
    APP_PRIMENG_MODULES,
    PaginatorEnhancerComponent
  ]
})
export class SharedMasterModule { }
