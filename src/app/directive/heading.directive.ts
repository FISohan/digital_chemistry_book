import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeading]'
})
export class HeadingDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.fontSize = '20px'
   }

}
