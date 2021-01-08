import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AccordionItemComponent,
  AccordionItemContentDirective,
  AccordionItemTitleDirective
} from './accordion-item.component';
import { AccordionComponent } from './accordion.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemTitleDirective,
    AccordionItemContentDirective,
  ],
  exports: [
    AccordionComponent,
    AccordionItemComponent,
    AccordionItemTitleDirective,
    AccordionItemContentDirective,
  ]
})
export class AccordionModule { }
