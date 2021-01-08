import { Component, Directive, Input, ViewContainerRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'eds-sub-tree',
  templateUrl: './sub-tree.component.html',
})
export class SubTreeComponent {
  @Input() isOpened = false;
  @Input() route: string;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.route && this.isActive()) {
          this.isOpened = true;
        }
      }
    });
  }

  toggle(): void {
    this.isOpened = !this.isOpened;
  }

  isActive(): boolean {
    return this.route ? this.router.isActive(this.route, false) : false;
  }
}

@Directive({
  selector: 'eds-sub-tree-title',
})
export class SubTreeTitleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
