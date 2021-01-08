import { Component, Directive, Input, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'eds-accordion-item',
  templateUrl: './accordion-item.component.html',
})
export class AccordionItemComponent {
  @Input() isOpened = false;

  constructor() { }

  toggle(): void {
    this.isOpened = !this.isOpened;
  }
}

@Directive({
  selector: 'eds-accordion-item-title',
})
export class AccordionItemTitleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: 'eds-accordion-item-content',
})
export class AccordionItemContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
