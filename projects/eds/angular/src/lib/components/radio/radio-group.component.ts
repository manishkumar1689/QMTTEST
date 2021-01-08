import { Directive, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let nextUniqueId = 0;

@Directive({
  selector: 'eds-radio-group',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioGroupDirective),
      multi: true
    }
  ]
})
export class RadioGroupDirective implements OnInit, ControlValueAccessor {
  groupName: String;

  _controlValueAccessorChangeFn: (value: any) => void = () => { };

  ngOnInit() {
    this.groupName = `eds-radio-group-${++nextUniqueId}`;
  }

  writeValue(obj: any): void { }

  registerOnChange(fn: (value: any) => void) {
    this._controlValueAccessorChangeFn = fn;
  }

  registerOnTouched(fn: any): void { }
}
