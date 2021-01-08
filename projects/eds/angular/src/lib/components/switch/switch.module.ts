import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwitchComponent, SwitchOffDirective, SwitchOnDirective } from './switch.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    SwitchComponent,
    SwitchOffDirective,
    SwitchOnDirective,
  ],
  exports: [
    SwitchComponent,
    SwitchOffDirective,
    SwitchOnDirective,
  ],
})
export class SwitchModule {}
