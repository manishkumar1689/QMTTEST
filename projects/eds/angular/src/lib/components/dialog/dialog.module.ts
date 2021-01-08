import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DialogActionsDirective,
  DialogComponent,
  DialogContentDirective,
  DialogTitleDirective
} from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    DialogComponent,
    DialogActionsDirective,
    DialogTitleDirective,
    DialogContentDirective,
  ],
  exports: [
    DialogComponent,
    DialogActionsDirective,
    DialogTitleDirective,
    DialogContentDirective,
  ],
})
export class DialogModule { }
