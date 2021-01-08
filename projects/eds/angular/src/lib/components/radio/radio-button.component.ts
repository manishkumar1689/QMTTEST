import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { RadioGroupDirective } from './radio-group.component';

let nextUniqueId = 0;

@Component({
  selector: 'eds-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class RadioButtonComponent implements OnInit {
  @Input() inputId: string;
  @Input() isChecked: boolean;
  @Input() isDisabled: boolean;
  @Input() value: string;

  radioGroup: RadioGroupDirective;

  constructor(radioGroup: RadioGroupDirective) {
    this.radioGroup = radioGroup;
  }

  ngOnInit() {
    this.inputId = this.inputId || `eds-radio-${++nextUniqueId}-input`;

    if (this.isChecked) {
      // TODO:
      // Error without timeout:
      // tslint:disable-next-line:max-line-length
      // stackoverflow.com/questions/39787038/how-to-manage-angular2-expression-has-changed-after-it-was-checked-exception-w
      setTimeout(() => {
        this.radioGroup._controlValueAccessorChangeFn(this.value);
      });
    }
  }

  _onInputChange(event: Event) {
    event.stopPropagation();
    this.radioGroup._controlValueAccessorChangeFn(this.value);
  }

}
