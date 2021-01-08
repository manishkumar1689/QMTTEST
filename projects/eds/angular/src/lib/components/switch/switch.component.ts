import { Component, Directive, forwardRef, Input, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'eds-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true,
    },
  ],
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() _value;
  @Input() isDisabled = false;
  onChange: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
  }

  constructor() { }

  writeValue(value) {
    this.value = value;
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) { }

  switch(e) {
    e.stopPropagation();
    this.value = !this.value;
  }
}

@Directive({
  selector: 'eds-switch-on',
})
export class SwitchOnDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: 'eds-switch-off',
})
export class SwitchOffDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
