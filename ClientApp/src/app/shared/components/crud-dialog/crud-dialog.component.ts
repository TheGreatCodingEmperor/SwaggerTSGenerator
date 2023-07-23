import { Component, Input, Output,EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.scss']
})
export class CrudDialogComponent {
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter();
  @Output() onSave = new EventEmitter();
  isAdd = false;
  @Input() editModel: any = {};
  @Output() editModelChange = new EventEmitter();

  onEdit(isAdd: boolean, item?: any) {
    this.isAdd = isAdd;
    this.editModel = isAdd ? {} : _.cloneDeep(item);
    this.visibleChange.emit(true);
    this.editModelChange.emit(this.editModel);
  }

  save(){
    this.onSave.emit(this.isAdd);
  }
}
