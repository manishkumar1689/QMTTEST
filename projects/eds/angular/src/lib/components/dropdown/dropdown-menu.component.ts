import { Component, AfterViewInit, Optional, Input } from '@angular/core';
import { DropdownComponent } from './dropdown.component';

@Component({
  selector: 'eds-dropdown-menu',
  templateUrl: './dropdown-menu.component.html'
})
export class DropdownMenuComponent implements AfterViewInit {
  @Input() opened = false;

  dropdown: DropdownComponent;

  constructor(@Optional() dropdown: DropdownComponent) {
    this.dropdown = dropdown;
  }

  ngAfterViewInit() {
    if (!this.dropdown) {
      setTimeout(() => {
        this.opened = true;
      });
    }
  }

}
