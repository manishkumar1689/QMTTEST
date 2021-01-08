export class Dialog {

  constructor(element) {
    this.dom = {
      dialog: element,
      content: element.querySelector('.content'),
      id: element.id,
      trigger: element.trigger,
      title: element.title,
      closeButton: undefined,
      submitButton: undefined
    };
    this.type = element.dataset.type;
    this.trigger = element.dataset.trigger;
    this.btnid = this.trigger + element.title;
    this.id = element.id;

    this.events = {
      closeDialogEvent: new CustomEvent('DialogClose', {
        detail: { id: this.dom.id }
      }),
      submitDialogEvent: new CustomEvent('SubmitDialog', {
        detail: {
          id: this.id
        }
      }),
      showDialogEvent: new CustomEvent('DialogShow', {
        detail: { id: this.dom.id }
      })
    };
  }

  init() {
    this.getCloseButton();
    this.getSubmitButton();
    this.eventHandler();
  }

  eventHandler() {
    // Open Dialog if
    //  - trigger defined
    if (this.trigger) {
      //let button = document.querySelector(this.trigger);
      let buttons = document.querySelectorAll(this.btnid);
      for(let button of buttons) {
        button.addEventListener('click', () => this.show(), false);
      }
    } else {
      //  - custom event defined
      this.dom.dialog.addEventListener('triggerDialog', e => {
        if (e.detail.id === this.dom.id) this.show();
      }, false);
    }

    // Close Dialog
    // this.dom.dialog.addEventListener('click', (e) => this.clickedOutside(e), false);


    switch (this.type) {
      case 'simple':
        if(this.dom.closeButton) {
          this.dom.closeButton.addEventListener('click', () => this.hide(), false); // internal button
        }
        if(this.dom.submitButton) {
          this.dom.submitButton.addEventListener('click', () => this.hide(), false); // internal button
        }
        break;
      case 'fullscreen':
        this.dom.closeButton.addEventListener('click', () => this.hide(), false); // internal cross
        this.dom.submitButton.addEventListener('click', () => this.hide(), false); // internal cross
        break;
            }
  }

  show(e) {
    this.dom.dialog.classList.add('show');
    this.dom.dialog.dispatchEvent(this.events.showDialogEvent);
  }

  hide() {
    this.dom.dialog.classList.remove('show');
    this.dom.dialog.dispatchEvent(this.events.closeDialogEvent);
  }

  clickedOutside() {
    if (event.target.classList.contains('dialog')) this.hide();
  }

  getCloseButton() {
    let buttons = this.dom.dialog.querySelectorAll('.btn');
    Array.from(buttons).forEach(button => {
      if (button.getAttribute('data-close')) {
        this.dom.closeButton = button;
      }
    });

    let icons = this.dom.dialog.querySelectorAll('.icon');
    Array.from(icons).forEach(icon => {
      if (icon.getAttribute('data-close')) {
        this.dom.closeButton = icon;
      }
    });
  }

  getSubmitButton() {
    //console.log("submit-button clicked");
    let buttons = this.dom.dialog.querySelectorAll('.btn');
    Array.from(buttons).forEach(button => {
      if (button.getAttribute('submit-close')) {
        this.dom.submitButton = button;
      }
    });

    let icons = this.dom.dialog.querySelectorAll('.icon');
    Array.from(icons).forEach(icon => {
      if (icon.getAttribute('submit-close')) {
        this.dom.submitButton = icon;
      }
    });
  }

  getId() {
	  return this.id;
  }
 
  destroy() {
    //console.log("Destroyinng Dialogs");
	    // Open Dialog if
      //  - trigger defined
    if(this.trigger){
      let button = document.querySelector(this.trigger);
      if(button) {
        button.removeEventListener('click', () => this.show(), false);
      }
    }else{
      //  - custom event defined
      this.dom.dialog.removeEventListener('triggerDialog', e => {
        if(e.detail.id == this.dom.id) this.show();
      }, false);
    }

    // Close Dialog
    // this.dom.dialog.addEventListener('click', (e) => this.clickedOutside(e), false);
    switch (this.type) {
      case 'simple':
        if(this.dom.closeButton) {
          this.dom.closeButton.removeEventListener('click', () => this.hide(), false); // internal button
        }
        break;
      case 'fullscreen':
        if(this.dom.closeButton) {
          this.dom.closeButton.removeEventListener('click', () => this.hide(), false); // internal cross
        }
        break;
    }
	  
  }
}
