import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'eds-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TreeComponent implements OnInit {
  @Input() mode = '';

  constructor() { }

  ngOnInit() {
  }

}
