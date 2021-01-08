import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SyntaxHighlightComponent } from './syntax-highlight.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SyntaxHighlightComponent
  ],
  exports: [
    SyntaxHighlightComponent
  ]
})
export class SyntaxHighlightModule { }
