export class Accordion {
  static toggleAccordion(li) {
    li.classList.toggle('opened');
  }

  constructor(element) {
    this.dom = {
      accordion: element,
      lis: element.querySelectorAll('li'),
    };
  }

  init() {
    this.eventHandler();
  }

  eventHandler(type) {
    Array.from(this.dom.lis).forEach(li => {
      if(li.querySelector('.title')){
        li.querySelector('.title').addEventListener('click', () => Accordion.toggleAccordion(li), false);
      }
    });
  }

  destroy() {
    Array.from(this.dom.lis).forEach(li => {
      if(li.querySelector('.title')){
        li.querySelector('.title').removeEventListener('click', () => Accordion.toggleAccordion(li), false);
      }
    });
  }
}
