import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemBarComponent, SystemBarItemsDirective } from './system-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SystemBarComponent,
    SystemBarItemsDirective
  ],
  exports: [
    SystemBarComponent,
    SystemBarItemsDirective
  ]
})
export class SystemBarModule { }
