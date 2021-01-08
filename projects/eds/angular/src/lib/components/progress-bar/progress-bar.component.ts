import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'eds-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class ProgressBarComponent implements OnInit {
  private _value: number = null;
  private _max = 100;
  private _buffer: number = null;
  private _percentage: number;
  @Input() color = '';
  @Input() mode = '';
  @Input() label: string;

  @Input()
  set value(value: number) {
    if (value === null) {
      return;
    }
    this._value = value;
    this.percentage = Math.round(100 * (this._value / this.max));
  }

  get value(): number {
    return this._value;
  }

  @Input()
  set max(value: number) {
    this._max = value;
    this.percentage = Math.round(100 * (this.value / this._max));
  }

  get max(): number {
    return this._max;
  }

  @Input()
  set buffer(value: number | string) {
    if (value === null) {
      return;
    }
    /**
     * TODO: Decide if we use below option to allow buffer to work with both "only buffered number and full value
     *
     * this._buffer = (<number>value < <number>this.value) ? Number(this.value) + Number(value) : <number>value;
     */
    this._buffer = <number>value;
  }

  get buffer(): number | string {
    return this._buffer;
  }

  get percentage(): number {
    return this._percentage;
  }

  set percentage(value: number) {
    this._percentage = value;
  }

  className: object;

  constructor() { }

  ngOnInit() {
    const { color, mode } = this;
    this.className = { 'progress-bar': true, [color]: color, [mode]: mode };
  }
}
