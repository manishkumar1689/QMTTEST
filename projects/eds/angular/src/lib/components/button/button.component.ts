import { Component, OnInit, ElementRef, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[eds-button], a[eds-button]',
  template: '<i *ngIf="icon" class="icon icon-{{icon}}"></i><ng-content></ng-content>',
  styleUrls: ['./button.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent implements OnInit {
  @Input() color: string;
  @Input() icon: string;

  private nativeElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.nativeElement.classList.add('btn');
  }

  ngOnInit(): void {
    if (this.color) {
      this.nativeElement.classList.add(this.color);
    }
  }

}
