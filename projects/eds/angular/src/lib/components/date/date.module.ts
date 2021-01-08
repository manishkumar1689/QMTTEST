import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './datepicker.component';
import { CalendarComponent } from './calendar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CalendarComponent,
    DatepickerComponent
  ],
  exports: [
    CalendarComponent,
    DatepickerComponent
  ]
})
export class DateModule { }
