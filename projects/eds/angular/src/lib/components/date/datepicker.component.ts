import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { Datepicker } from '@eds/vanilla/date-field/Datepicker';

@Component({
  selector: 'eds-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DatepickerComponent implements OnInit {
  datepicker;
  nativeElement;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnInit() {
    this.datepicker = new Datepicker(this.nativeElement.children[0]);
    this.datepicker.init();
  }

}
