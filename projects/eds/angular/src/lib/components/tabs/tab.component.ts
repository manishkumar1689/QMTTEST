import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'eds-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  @Input() label: String;
  @Input() selected: boolean | string;

  constructor() { }

  ngOnInit() {
    this.selected = this.selected === '';
  }

}
