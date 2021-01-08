import { Component, AfterViewInit, ElementRef, Input, OnChanges, ViewEncapsulation } from '@angular/core';
import { Gauge } from '@eds/vanilla/gauge/Gauge';

let nextUniqueId = 0;

@Component({
  selector: 'eds-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class GaugeComponent implements AfterViewInit, OnChanges {
  @Input() settings;

  gauge;
  uniqueId;
  nativeElement;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.uniqueId = `eds-gauge-${++nextUniqueId}`;
  }

  ngOnChanges(changes) {
    if (!changes.settings.firstChange) {
      this.gauge.setValue(changes.settings.currentValue.value);
    }
  }

  ngAfterViewInit() {
    this.gauge = new Gauge(this.nativeElement.children[0]);

    this.gauge.dom = {
      gauge: this.nativeElement.children[0],
      id: this.uniqueId,
      settings: JSON.stringify(this.settings),
      valueArc: undefined,
      valueLabel: undefined
    };

    this.gauge.init();
  }

}
