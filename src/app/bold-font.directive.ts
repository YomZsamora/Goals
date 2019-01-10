import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appBoldFont]'
})
export class BoldFontDirective {

  constructor(private elem:ElementRef) {}

  @HostListener("click") onClicks(){
    this.textColor("red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textColor("green")
  }

  textColor(action:string){
  	this.elem.nativeElement.style.color=action;
  }

}
