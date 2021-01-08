export class Card {
  constructor(element) {
    this.dom = {
      card: element
    }
  }

  init() {
    this.eventHandler();
  }

  destroy() {
    this.removeEventHandler();
  }

  eventHandler() {
    this.dom.card.addEventListener('click', this.selectCard.bind(this));
  }

  removeEventHandler() {
    this.dom.card.removeEventListener('click', this.selectCard);
  }

  selectCard() {
    this.dom.card.classList.toggle('selected');
  }
}
