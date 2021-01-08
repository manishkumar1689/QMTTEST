import { Component, AfterViewChecked, Input, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace';
import 'prismjs/plugins/line-numbers/prism-line-numbers';

@Component({
  selector: 'eds-syntax-highlight',
  templateUrl: './syntax-highlight.component.html',
  styleUrls: ['./syntax-highlight.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class SyntaxHighlightComponent implements OnInit, AfterViewChecked {

  @Input() code: string;
  @Input() language = 'html';
  @Input() showLineNumbers: boolean;

  nw;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    this.nw = Prism.plugins.NormalizeWhitespace;
    this.code = this.nw.normalize(this.code);
  }

  ngAfterViewChecked(): void {
    Prism.highlightElement(this.elRef.nativeElement.querySelector('code'));
  }

}
