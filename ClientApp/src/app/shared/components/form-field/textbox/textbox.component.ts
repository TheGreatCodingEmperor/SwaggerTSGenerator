import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextboxComponent),
      multi: true,
    }
  ]
})
export class TextboxComponent implements ControlValueAccessor {
  @ViewChild('inputElement') inputElement: ElementRef;
  @Input() propJson:any[] = [];
  // @Input() inputProps: any[] = [];
  value: any;
  disabled: boolean;

  onChange: any = () => { };
  onTouched: any = () => { };

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(value: any): void {
    this.value = value;
    this.onChange(value);
    this.onTouched();
  }
}
