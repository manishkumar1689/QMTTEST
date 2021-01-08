import { Component, OnInit, ElementRef, Optional } from '@angular/core';
import { Calendar } from '@eds/vanilla/date-field/Calendar';
import { DatepickerComponent } from './datepicker.component';

@Component({
  selector: 'eds-calendar',
  templateUrl: './calendar.component.html'
})
export class CalendarComponent implements OnInit {
  calendar;
  nativeElement;
  datepicker;
  closed = true;
  inline = false;

  constructor(elementRef: ElementRef, @Optional() datepicker: DatepickerComponent) {
    this.nativeElement = elementRef.nativeElement;

    this.datepicker = datepicker;
  }

  ngOnInit() {
    if (!this.datepicker) {
      this.calendar = new Calendar(this.nativeElement.children[0]);
      this.calendar.init();
      this.inline = true;
      this.closed = false;
    }
  }

}
