import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[structure-directive-ionic]' // Attribute selector
})
export class StructureDirectiveIonicDirective {

  constructor(public elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#FF00FF';
  }

}
