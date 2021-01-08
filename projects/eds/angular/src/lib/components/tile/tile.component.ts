import { Component, Directive, ElementRef, OnDestroy, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { TileService } from './tile.service';

@Component({
  selector: 'div[eds-tile]',
  templateUrl: './tile.component.html',
})
export class TileComponent implements OnDestroy {

  nativeElement: HTMLElement;
  isMaximized = false;
  maximizeSubscription: Subscription;
  minimizeSubscription: Subscription;

  constructor(elementRef: ElementRef, private tileService: TileService) {
    this.nativeElement = elementRef.nativeElement;
    this.nativeElement.classList.add('tile');
    this.initSubscription();
  }

  initSubscription() {
    this.maximizeSubscription = this.tileService.maximizeEvent.subscribe((element) => {
      if (element === this.nativeElement) {
        this.nativeElement.classList.add('fullscreen');
        this.isMaximized = true;
      } else {
        this.nativeElement.classList.add('hidden');
      }
    });

    this.minimizeSubscription = this.tileService.minimizeEvent.subscribe((element) => {
      if (element === this.nativeElement) {
        this.nativeElement.classList.remove('fullscreen');
        this.nativeElement.removeAttribute('style');
        this.isMaximized = false;
      } else {
        this.nativeElement.classList.remove('hidden');
      }
    });
  }

  ngOnDestroy() {
    this.maximizeSubscription.unsubscribe();
    this.minimizeSubscription.unsubscribe();
  }

  maximize() {
    this.tileService.maximize(this.nativeElement);
  }

  minimize() {
    this.tileService.minimize(this.nativeElement);
  }
}

@Directive({
  selector: 'eds-tile-title',
})
export class TileTitleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: 'eds-tile-subtitle',
})
export class TileSubtitleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: 'eds-tile-actions',
})
export class TileActionsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
