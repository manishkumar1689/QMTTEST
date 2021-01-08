import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eds-icon',
  templateUrl: './icon.component.html'
})
export class IconComponent {
  @Input() icon: string;

  constructor() { }

}
