import { Component, AfterContentInit, ContentChildren, QueryList, ViewEncapsulation,Output,EventEmitter } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'eds-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  @Output() TabSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter((tab) => tab.selected as boolean);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab) {
    this.tabs.toArray().forEach(t => t.selected = false);
    tab.selected = true;
    this.TabSelected.emit(tab.label);
  }

}
