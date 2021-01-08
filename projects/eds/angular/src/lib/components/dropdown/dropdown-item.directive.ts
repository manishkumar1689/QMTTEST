import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[eds-dropdown-item]'
})
export class DropdownItemDirective {

  constructor(elementRef: ElementRef) {
    elementRef.nativeElement.classList.add('item');
    elementRef.nativeElement.style.display = 'block';
  }

}
