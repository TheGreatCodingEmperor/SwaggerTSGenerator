import { Directive, ElementRef, Input, OnChanges, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[propJson]'
})
export class PropJsonDirective implements OnChanges {
  @Input('propJson') inputProps: any[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnChanges() {
    this.loadProps();
  }

  ngAfterViewInit() {
    this.loadProps();
  }

  loadProps() {
    let inputProps: any = {};
    for (let props of this.inputProps) {
      inputProps = Object.assign(inputProps, props);
    }
    this.el.nativeElement.style = inputProps.style;
    this.el.nativeElement.class = inputProps.class;
    this.el.nativeElement.disabled = inputProps.disabled || false;
    if (inputProps.events) {
      const keys = Object.keys(inputProps.events);
      keys.forEach((key) => {
        const value = inputProps.events[key];
        this.el.nativeElement.addEventListener(key, (event) => {
          // 在這裡處理change事件
          value(event);
        });
      });
    }
  }
}
