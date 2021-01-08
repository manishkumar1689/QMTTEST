import { Component, OnInit, Input, ViewEncapsulation, ElementRef, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

let nextUniqueId = 0;

@Component({
  selector: 'eds-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {
  @Input() _value;
  @Input() isDisabled = false;
  @Input() isIndeterminate = false;
  @Input() inputId: string;

  nativeElement: HTMLElement;

  onChange: any = () => { };

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
  }

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnInit() {
    this.inputId = this.inputId || `eds-checkbox-${++nextUniqueId}-input`;

    // TODO: Checkboxes fly all over the page if parent is not relative
    this.nativeElement.style.position = 'relative';
  }

  writeValue(value): void {
    this.value = value;
  }

  registerOnChange(fn): void {
    this.onChange = fn;
  }

  registerOnTouched(fn): void { }

  toggle(e) {
    e.stopPropagation();
    this.value = !this.value;
  }
}
