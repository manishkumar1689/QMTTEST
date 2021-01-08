import { Component, OnInit, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'span[eds-tooltip]',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TooltipComponent implements OnInit {
  @Input() position = '';
  @Input() message = '';
  @Input() color = '';
  @Input() icon = '';
  @Input() visibility = '';

  nativeElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.nativeElement.classList.add('tooltip');
    this.nativeElement.classList.add(this.icon ? 'pointer' : 'dotted');
  }

}
