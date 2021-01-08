import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'eds-settings',
  templateUrl: './settings.component.html'
})
export class SettingsComponent implements OnInit {
  @Input() opened: false;
  private nativeElement: HTMLElement;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.nativeElement.style.order = '1';
  }

  ngOnInit() {}

}
