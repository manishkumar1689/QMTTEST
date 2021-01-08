import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'eds-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class AccordionComponent {
  @Input() mode = '';

  constructor() { }
}
