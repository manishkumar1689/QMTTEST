import { Notification } from '../notification/Notification';

const NotificationLog = {
  init() {
    this.dom = {
      notificationLog: document.querySelector('.notification-log'),
      notificationLogContainer: document.querySelector('.notification-log-container'),
      notificationLogTrigger: document.querySelector('.notification-log-trigger'),
      notificationLogNumber: document.querySelector('.notification-log-number'),
      notificationLogEmpty: document.querySelector('.notification-log-empty')
    };
    this.state = {
      isNew: 0,
      total: 0,
      seen: false,
      notifications: [],
      notificationsDOM: [],
      liveNotification: null
    };
    this.listeners = {
      clickTrigger: () => this.clickTrigger(),
      SyspanelOpenEvent: () => this.removeLiveNotification(),
      SyspanelTabEvent: (e) => this.clearAllNotifications(e),
      SyspanelCloseEvent: (e) => this.clearAllNotifications(e)
    };
    this.events = {
      toggleSyspanel: new CustomEvent('toggleSyspanel', { detail: this.dom.notificationLog }),
      NotificationLogCounterUpdate: new CustomEvent('NotificationLogCounterUpdate'),
    };
    this.notificationTimeout = 10000;
    this.eventHandler();
  },

  eventHandler() {
    this.dom.notificationLogTrigger.addEventListener('click', this.listeners.clickTrigger, false);
    window.addEventListener('SyspanelOpenEvent', this.listeners.SyspanelOpenEvent, false);
    window.addEventListener('SyspanelTabEvent', this.listeners.SyspanelTabEvent, false);
    window.addEventListener('SyspanelCloseEvent', this.listeners.SyspanelCloseEvent, false);
  },

  setNotification(notification) {
    notification.isNew = true;
    this.state.notifications.push(notification);
    this.state.isNew += 1;
    this.state.total += 1;
    this.showLiveNotification(notification);
    this.prependToLog(notification);
    this.updateCounter();
    this.removeEmptyMessage();

    // TODO: How to serve, place, handle audio files...
    // const audio = new Audio('public/vanilla-components/notification-log/notification.mp3');
    // audio.play();
  },

  loadNotificationLog(notifications) {
    this.state.notifications.push(notifications);
    this.state.total = notifications.length;

    for (let i = 0; i < notifications.length; i++) {
      const notification = notifications[i];
      if (notification.isNew) {
        this.state.isNew += 1;
        this.showLiveNotification(notification);
      }
      this.prependToLog(notification);
    }

    this.updateCounter();
    this.removeEmptyMessage();
  },

  setNotificationTimeout(ms) {
    this.notificationTimeout = ms;
  },

  showLiveNotification(notification) {
    this.removeLiveNotification();

    const newNotification = new Notification({
      title: notification.title,
      description: notification.description,
      action: notification.action,
      timeout: this.notificationTimeout
    })
    newNotification.init();

    this.state.liveNotification = newNotification;

    newNotification.getNotification().addEventListener('click', () => {
      this.clearNotification();
    });
  },

  removeLiveNotification() {
    if (this.state.liveNotification) {
      this.state.liveNotification.destroy();
    }
  },

  prependToLog(notification) {
    const notificationLogItem = document.createElement('div');
    notificationLogItem.classList.add('notification-log-item');

    if (notification.isNew) {
      notificationLogItem.classList.add('new');
    }

    const html =
      `
    <div class="title">${notification.title}</div>
    <div class="description">${notification.description}</div>
    <span class="notification-log-item-time">${this.getRelativeTime(notification.timestamp)}</span>
    `;

    notificationLogItem.innerHTML = html;
    notificationLogItem.dataset.timestamp = notification.timestamp;
    this.state.notificationsDOM.push(notificationLogItem);
    document.querySelector('.notification-log-container').prepend(notificationLogItem);

    if (notification.action) {
      notificationLogItem.addEventListener('click', () => {
        window.dispatchEvent(this.events.toggleSyspanel);
        setTimeout(() => {
          notification.action();
        }, 250);
      });
    }

  },

  updateCounter() {
    window.dispatchEvent(this.events.NotificationLogCounterUpdate);

    this.dom.notificationLogNumber.innerHTML = this.state.isNew;
    const hasNotification = 'has-notification';
    const noNotification = 'no-notification';

    if (this.state.isNew === 0) {
      if (this.dom.notificationLogTrigger.classList.contains(hasNotification)) {
        this.dom.notificationLogTrigger.classList.remove(hasNotification);
        this.dom.notificationLogTrigger.classList.add(noNotification);
      }
    } else {
      this.seen = false;
      this.dom.notificationLogTrigger.classList.remove(noNotification);
      this.dom.notificationLogTrigger.classList.add(hasNotification);
    }
  },

  markAsSeen(item) {
    item.classList.remove('new');
  },

  markAllAsSeen() {
    for (let i = 0; i < this.state.notificationsDOM.length; i++) {
      this.markAsSeen(this.state.notificationsDOM[i]);
    }
    this.state.notificationsDOM = [];
  },

  clickTrigger() {
    window.dispatchEvent(this.events.toggleSyspanel);
    this.seen = true;
    this.updateTimes();
  },

  clearNotification() {
    this.state.isNew -= 1;
    this.updateCounter();
    this.markAsSeen(this.state.notificationsDOM[this.state.notificationsDOM.length - 1]);
  },

  clearAllNotifications() {
    if (this.seen) {
      this.state.isNew = 0;
      this.seen = false;
      this.updateCounter();
      this.markAllAsSeen();
    }
  },

  removeEmptyMessage() {
    if (!this.dom.notificationLogEmpty.classList.contains('hidden')) {
      this.dom.notificationLogEmpty.classList.add('hidden');
    }
  },

  // TODO: Talk about i18n and l10n, since right now time units are hardcoded...
  getRelativeTime(timestamp) {
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = new Date() - timestamp;

    if (elapsed < msPerMinute) {
      return '';
    } else if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + ' m';
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + ' h';
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + ' d';
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + ' mo';
    } else {
      return Math.round(elapsed / msPerYear) + ' y';
    }
  },

  updateTimes() {
    for (let i = 0; i < this.state.notificationsDOM.length; i++) {
      const item = this.state.notificationsDOM[i];
      item.querySelector('.notification-log-item-time').innerHTML = this.getRelativeTime(new Date(item.dataset.timestamp));
    }
  }
}

export { NotificationLog };
