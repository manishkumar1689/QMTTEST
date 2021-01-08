import { Component, OnInit, Input, Output, EventEmitter, Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'eds-system-bar',
  templateUrl: './system-bar.component.html'
})
export class SystemBarComponent implements OnInit {
  @Input() title = 'Ericsson Design System';
  @Input() acronym: String;
  @Input() username = 'Username';
  @Output() settingsHandler = new EventEmitter();
  experimental: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.setAcronym();
  }

  setAcronym() {
    if (!this.acronym) {
      const firstLetters = this.title.match(/\b(\w)/g);
      this.acronym = firstLetters.join('');
    }
  }

  toggleSettings() {
    this.settingsHandler.emit();
  }

}

@Directive({
  selector: 'eds-system-bar-items',
})
export class SystemBarItemsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}