import { Directive, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Directive({
  selector: '[propJson]'
})
export class PropJsonDirective {
  @Input('propJson') inputProps: any[] = [];

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    let inputProps:any = {};
    for(let props of this.inputProps){
      inputProps = Object.assign(inputProps,props);
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
      // for (let eve in this.inputProps.events) {
      //   console.log(eve);
      //   console.log(this.inputProps[eve]);
      //   // 添加change事件
      //   this.inputElement.nativeElement.addEventListener(eve, (event) => {
      //     // 在這裡處理change事件
      //     this.inputProps.change(event);
      //   });
      // }
    }
  }
}
