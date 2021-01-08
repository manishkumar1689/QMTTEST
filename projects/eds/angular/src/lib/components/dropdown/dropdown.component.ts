import {
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'eds-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class DropdownComponent implements AfterViewInit {
  @Input() multiLabel: string;
  @Input() icon: string;

  opened = false;
  nativeElement: HTMLElement;
  multiChecked: Number;

  constructor(elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngAfterViewInit() {
    this.handleMulti();
    this.setMultiCount();
  }

  open() {
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

  toggle() {
    this.opened ? this.close() : this.open();
  }

  @HostListener('document:click', ['$event']) outsideClick(e) {
    if (!this.nativeElement.contains(e.target)) {
      this.close();
    }
  }

  handleMulti() {
    if (this.multiLabel) {
      Array.from(this.nativeElement.querySelectorAll('input[type="checkbox"]')).forEach((el) => {
        el.addEventListener('click', () => {
          this.setMultiCount();
        });
      });
    }
  }

  setMultiCount() {
    if (this.multiLabel) {
      setTimeout(() => {
        this.multiChecked = this.nativeElement.querySelectorAll('input[type="checkbox"]:checked').length;
      });
    }
  }
}

@Directive({
  selector: 'eds-dropdown-trigger',
})
export class DropdownTriggerDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
