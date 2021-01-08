import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { IconModule } from '../icon/icon.module';
import { DropdownItemDirective } from './dropdown-item.directive';
import { DropdownMenuComponent } from './dropdown-menu.component';
import { DropdownComponent, DropdownTriggerDirective } from './dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    IconModule,
  ],
  declarations: [
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuComponent,
    DropdownTriggerDirective,
  ],
  entryComponents: [
    DropdownMenuComponent,
  ],
  exports: [
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuComponent,
    DropdownTriggerDirective,
  ],
})
export class DropdownModule {}
