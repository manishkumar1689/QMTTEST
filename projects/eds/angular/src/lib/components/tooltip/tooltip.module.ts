import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconModule } from '../icon/icon.module';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  imports: [
    CommonModule,
    IconModule
  ],
  declarations: [
    TooltipComponent
  ],
  exports: [
    TooltipComponent
  ]
})
export class TooltipModule { }
