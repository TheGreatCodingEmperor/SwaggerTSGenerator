import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorEnhancerComponent } from './components/paginator-enhancer.component';
import { APP_PRIMENG_MODULES } from './modules/app-primeng-modules';
import { TextboxComponent } from './components/form-field/textbox/textbox.component';
import { PropJsonDirective } from './directives/prop-json.directive';



@NgModule({
  declarations: [
    PaginatorEnhancerComponent,

    TextboxComponent,
    PropJsonDirective
  ],
  imports: [
    CommonModule,
    APP_PRIMENG_MODULES,
  ],
  exports:[
    APP_PRIMENG_MODULES,
    PaginatorEnhancerComponent,

    TextboxComponent,
    PropJsonDirective
  ]
})
export class SharedMasterModule { }
