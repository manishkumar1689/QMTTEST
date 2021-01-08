export class MultiPanelTile {

  constructor(element) {
    this.dom = {
      multiPanelTile: element,
      leftPanel: element.querySelector('.left-panel'),
      midPanel: element.querySelector('.mid-panel'),
      rightPanel: element.querySelector('.right-panel'),
      leftPanelTriggers: element.querySelectorAll('.left-panel-trigger'),
      rightPanelTriggers: element.querySelectorAll('.right-panel-trigger'),
    };
    this.listeners = {
      toggleLeftPanel: () => {
        this.togglePanel(this.dom.leftPanel);
        this.updatePanelBehavior();
      },
      toggleRightPanel: () => {
        this.togglePanel(this.dom.rightPanel);
        this.updatePanelBehavior();
      },
    };
    this.flags = {
      panelLeft: false,
      panelRight: false,
    }
  }

  init() {
    this.eventHandler();
    this.updatePanelBehavior();
  }

  destroy() {
    this.removeEventHandler();
  }

  eventHandler() {
    Array.from(this.dom.leftPanelTriggers).forEach(trigger => {
      trigger.addEventListener('click', this.listeners.toggleLeftPanel, false);
    });
    Array.from(this.dom.rightPanelTriggers).forEach(trigger => {
      trigger.addEventListener('click', this.listeners.toggleRightPanel, false);
    });

    window.addEventListener('resize', () => this.updatePanelBehavior(), false);
  }

  removeEventHandler() {
    Array.from(this.dom.leftPanelTriggers).forEach(trigger => {
      trigger.removeEventListener('click', this.listeners.toggleLeftPanel, false);
    });
    Array.from(this.dom.rightPanelTriggers).forEach(trigger => {
      trigger.removeEventListener('click', this.listeners.toggleRightPanel, false);
    });

    window.removeEventListener('resize', () => this.updatePanelBehavior(), false);
  }

  togglePanel(panel) {
    if (this.isPanelOpen(panel)) {
      this.hidePanel(panel);
    } else {
      this.showPanel(panel);
    }
  }

  isPanelOpen(panel) {
    return !panel.classList.contains('hidden');
  }

  isPanelClosed(panel) {
    return panel.classList.contains('hidden');
  }

  hidePanel(panel) {
    panel.classList.add('hidden');
  }

  showPanel(panel) {
    if (panel.classList.contains('left-panel')) {
      this.flags.panelLeft = true;
    }
    if (panel.classList.contains('right-panel')) {
      this.flags.panelRight = true;
    }
    panel.classList.remove('hidden');
  }

  updatePanelBehavior() {
    const leftPanel = this.dom.leftPanel;
    const midPanel = this.dom.midPanel;
    const rightPanel = this.dom.rightPanel;
    const tileWidth = this.dom.multiPanelTile.offsetWidth;
    const pageWidth = document.body.offsetWidth;

    if (pageWidth < 769) { // mobile, tablet
      if (this.isPanelOpen(leftPanel) && this.isPanelOpen(rightPanel)) {
        this.hidePanel(leftPanel);
        this.hidePanel(midPanel);
      }

      if (this.isPanelClosed(leftPanel) && this.isPanelClosed(rightPanel)) {
        this.showPanel(midPanel);
      }

      if (this.isPanelOpen(leftPanel) && this.isPanelClosed(rightPanel)) {
        this.hidePanel(midPanel);
        this.showPanel(leftPanel);
      }

      if (this.isPanelClosed(leftPanel) && this.isPanelOpen(rightPanel)) {
        this.hidePanel(midPanel);
        this.showPanel(rightPanel);
      }

    } else if (pageWidth < 1201) { // desktop, larger screen
      this.showPanel(midPanel);
      if (this.isPanelOpen(leftPanel) && this.isPanelOpen(rightPanel)) {

        if (this.flags.panelLeft) {
          this.hidePanel(rightPanel);
        } else {
          this.hidePanel(leftPanel);
        }

        if (this.flags.panelRight) {
          this.hidePanel(leftPanel);
          this.showPanel(rightPanel);
        }
      }
    } else {
      this.showPanel(midPanel);
    }

    this.flags.panelLeft = false;
    this.flags.panelRight = false;
  }
}
