import dragula from 'dragula/dist/dragula.min';

export class DropAreas {
  constructor(elements) {
    this.dom = {
      dropAreas: elements,
    }
  }

  init() {
    this.initEmptyStates();
    this.dragBehavior();
    this.fixForTouchScreen();
  }

  initEmptyStates() {
    for (let i = 0; i < this.dom.dropAreas.length; i++) {
      const da = this.dom.dropAreas[i];
      if (this.cardsIn(da) === 0) {
        this.showEmptyState(da);
      }
    }
  }

  dragBehavior() {
    let prevContainer;

    dragula(this.dom.dropAreas)
      .on('over', (el, container) => {
        if (!prevContainer) {
          prevContainer = container;
        }

        if (prevContainer !== container) {
          this.showDropOver(container);
          this.hideDropOver(prevContainer);

          if (this.cardsIn(container) === 0) {
            this.hideEmptyState(container);
          }

          if (this.cardsIn(prevContainer) === 1) {
            this.showEmptyState(prevContainer);
          }

          prevContainer = container;
        }
      })
      .on('drop', (el, container) => {
        this.hideDropOver(container);
        prevContainer = null;
      })
      .on('cancel', (el, container) => {
        this.hideDropOver(container);
        prevContainer = null;
      });
  }

  cardsIn(dropArea) {
    return Array.from(dropArea.querySelectorAll('.card')).length;
  }

  showEmptyState(element) {
    try {
      element.querySelector('.empty-state').classList.add('visible');
    } catch (err) {
      this.emptyStateNotFound();
    }
  }

  hideEmptyState(element) {
    try {
      element.querySelector('.empty-state').classList.remove('visible');
    } catch (err) {
      this.emptyStateNotFound();
    }
  }

  emptyStateNotFound() {
    console.error('No empty-state element found! You have to add one to your drop-area. Check EDS documentation for more info.');
  }

  showDropOver(element) {
    element.classList.add('drop-over');
  }

  hideDropOver(element) {
    element.classList.remove('drop-over');
  }

  // TODO: Open issue: https://github.com/bevacqua/dragula/issues/487
  fixForTouchScreen() {
    for (let i = 0; i < this.dom.dropAreas.length; i++) {
      this.dom.dropAreas[i].addEventListener('touchmove', e => e.preventDefault());
    }
  }
}
