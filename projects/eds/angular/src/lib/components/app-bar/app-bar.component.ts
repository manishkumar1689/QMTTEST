import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Router, RoutesRecognized, ActivatedRoute } from '@angular/router';
import { AppBarService } from './app-bar.service';

@Component({
  selector: 'eds-app-bar',
  templateUrl: './app-bar.component.html'
})
export class AppBarComponent {
  @Output() menuHandler = new EventEmitter();
  @Input() menuOpened: boolean;
  @Input() dynamicTitle: String;
  title: String;
  subtitle: String;
  menuTitle = 'Menu';

  constructor(private router: Router, private activatedRoute : ActivatedRoute, private appbarService : AppBarService)
  {
    this.appbarService.Title.subscribe(t => {
      this.title = t;
    });
    this.appbarService.SubTitle.subscribe(t => {
      this.subtitle = t;
    });
    this.appbarService.MenuTitle.subscribe(t => {
      this.menuTitle = t;
    });

    router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        const route = event.state.root.firstChild;
        this.appbarService.SetTitle(this.dynamicTitle || route.data.title);
        this.appbarService.SetSubTitle(route.data.subtitle);
      }
    })
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened;
    this.menuHandler.emit();
  }
}
