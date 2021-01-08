export class Syspanel {
  constructor(element) {
    this.dom = {
      syspanel: element,
      syspanelCloseIcons: element.querySelectorAll('.syspanel-close'),
      items: element.children
    };
    this.listeners = {
      toggleSyspanel: (e) => this.toggle(e),
      pageClick: (e) => this.pageClickHandler(e),
      closeIconClickHandler: () => this.close()
    };
    this.events = {
      SyspanelOpenEvent: new CustomEvent('SyspanelOpenEvent'),
      SyspanelCloseEvent: new CustomEvent('SyspanelCloseEvent'),
      SyspanelTabEvent: new CustomEvent('SyspanelTabEvent')
    }
  }

  init() {
    this.eventHandler();
  }

  destroy() {
    this.removeEventHandler();
  }

  eventHandler() {
    window.addEventListener('toggleSyspanel', this.listeners.toggleSyspanel, false);
    Array.from(this.dom.syspanelCloseIcons).forEach(icon => {
      icon.addEventListener('click', this.listeners.closeIconClickHandler, false);
    });
  }

  removeEventHandler() {
    window.removeEventListener('toggleSyspanel', this.listeners.toggleSyspanel, false);
    Array.from(this.dom.syspanelCloseIcons).forEach(icon => {
      icon.removeEventListener('click', this.listeners.closeIconClickHandler, false);
    });
  }

  toggle(e) {
    const panel = e.detail;

    if (this.isHidden(this.dom.syspanel)) {
      this.show(panel);
      this.hideAllExcept(panel);
      this.open();
    } else {
      if (this.isHidden(panel)) {
        this.show(panel);
        this.hideAllExcept(panel);
        this.tabEvent();
      } else {
        this.close();
      }
    }
  }

  open() {
    this.show(this.dom.syspanel);
    this.openEvent();
  }

  close() {
 //   this.hide(this.dom.syspanel);
    this.closeEvent();
  }

  isHidden(element) {
    return element.classList.contains('hidden');
  }

  // hide(element) {
  //   element.classList.add('hidden');
  // }

  show(element) {
    element.classList.remove('hidden');
  }

  hideAllExcept(element) {
    Array.from(this.dom.items).forEach(item => {
      if (item !== element) {
        this.hide(item);
      }
    });
  }

  openEvent() {
    window.addEventListener('click', this.listeners.pageClick, true);
    window.dispatchEvent(this.events.SyspanelOpenEvent);
  }

  closeEvent() {
    window.removeEventListener('click', this.listeners.pageClick, true);
    window.dispatchEvent(this.events.SyspanelCloseEvent);
  }

  tabEvent() {
    window.dispatchEvent(this.events.SyspanelTabEvent);
  }

  pageClickHandler(e) {
    console.log(e);

    // if(!document.querySelector('.sysbar').contains(e.target) && !this.dom.syspanel.contains(e.target)) {
    //   this.close();
    // }


    // if(!this.dom.syspanel.contains(e.target)) {
    //   this.close();
    // }
    // if(!document.querySelector('.sysbar').contains(e.target)) {
    //   this.close();
    // }

  
    if(!document.querySelector('.sysbar').contains(e.target) && !this.dom.syspanel.contains(e.target)) {
      this.close();
    }
  }

}
