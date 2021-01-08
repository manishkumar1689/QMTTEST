import { Appbar } from './Appbar';
import { Appnav } from './Appnav';

export class App {

  constructor(element) {
    this.dom = {
      app: element,
      appbar: element.querySelector('.appbar'),
      appnav: element.querySelector('.appnav'),
    };
    this.appbar = new Appbar(this.dom.appbar);
    this.appnav = new Appnav(this.dom.appnav);
    this.listeners = {
      toggle: () => this.toggle()
    };
  }

  init() {
    this.appbar.init();
    this.appnav.init();
    this.eventHandler();
  }

  destroy() {
    this.removeEventHandler();
    this.appbar.destroy();
    this.appnav.destroy();
  }

  eventHandler() {
    window.addEventListener('SyspanelOpenEvent', this.listeners.toggle, false);
    window.addEventListener('SyspanelCloseEvent', this.listeners.toggle, false);
  }

  removeEventHandler() {
    window.removeEventListener('SyspanelOpenEvent', this.listeners.toggle, false);
    window.removeEventListener('SyspanelCloseEvent', this.listeners.toggle, false);
  }

  toggle() {
    if (this.dom.app.classList.contains('slide-left')) {
      this.slideRight();
    } else {
      this.slideLeft();
    }
  }

  slideLeft() {
    this.dom.app.classList.add('slide-left');
    this.dom.app.classList.remove('slide-right');
  }

  slideRight() {
    this.dom.app.classList.add('slide-right');
    this.dom.app.classList.remove('slide-left');
  }

}