export class Notification {
  constructor(props) {
    this.dom = {
      notification: null,
      close: null
    };
    this.props = props || {
      title: 'No notification title',
      description: 'You are missing adding the description also'
    };
  }

  init() {
    this.createNotification();
    this.eventHandler();
    console.log("notifcastion called");
  }

  destroy() {
    this.dom.notification.removeEventListener('click', (e) => this.handleClick(e), false);
    this.dom.notification.remove();
  }

  eventHandler() {
    this.dom.notification.addEventListener('click', (e) => this.handleClick(e), false);
  }

  getNotification() {
    return this.dom.notification;
  }

  createNotification() {
    this.dom.notification = document.createElement('div');
    this.dom.notification.classList.add('notification');
    const html =
      `
      <div class="top-row">
        <div class="title">${this.props.title}</div>
        <i class="icon icon-cross close"></i>
      </div>
      <div class="description">
        ${this.props.description}
      </div>
    `;
    this.dom.notification.innerHTML = html;
    this.dom.close = this.dom.notification.querySelector('.close');

    document.body.append(this.dom.notification);

    setTimeout(() => {
      this.dom.notification.classList.add('live');
    });


    if (this.props.timeout) {
      setTimeout(() => {
        if (this.dom.notification) {
          this.dom.notification.remove();
        }
      }, this.props.timeout);
    }
  }

  handleClick(e) {
    if (e.target !== this.dom.close && this.props.action) {
      this.props.action();
    }
    this.destroy();
  }

}
