import { Component, Input } from '@angular/core';

@Component({
  selector: 'eds-tree-item',
  templateUrl: './tree-item.component.html'
})
export class TreeItemComponent {
  @Input() route: string;
  @Input() exact: boolean = true;

  constructor() { }
}
