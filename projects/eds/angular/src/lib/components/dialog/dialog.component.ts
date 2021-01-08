import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

export interface IDialog {
  isOpened: boolean;
}

// changeDetection:
// https://stackoverflow.com/questions/34364880/expression-has-changed-after-it-was-checked
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'eds-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements AfterViewInit {
  @Input() isOpened = false;
  @Input() mode: String;

  @Output() change: EventEmitter<IDialog> = new EventEmitter<IDialog>();

  @ViewChild('content', {static: false}) content: ElementRef;
  @ViewChild('actions', {static: false}) actions: ElementRef;

  contentExists = true;
  actionsExist = true;

  constructor() { }

  close() {
    this.isOpened = false;
    this.change.emit({
      isOpened: this.isOpened,
    });
  }

  ngAfterViewInit(): void {
    if (this.content.nativeElement.childNodes.length === 0) {
      this.contentExists = false;
    }
    if (this.actions.nativeElement.childNodes.length === 0) {
      this.actionsExist = false;
    }
  }
}

@Directive({
  selector: 'eds-dialog-title',
})
export class DialogTitleDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Directive({
  selector: 'eds-dialog-content',
})
export class DialogContentDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}


@Directive({
  selector: 'eds-dialog-actions',
})
export class DialogActionsDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}


