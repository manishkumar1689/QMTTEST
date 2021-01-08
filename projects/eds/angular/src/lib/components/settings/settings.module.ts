import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwitchModule } from '../switch/switch.module';
import { SettingsComponent } from './settings.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SwitchModule,
    FormsModule
  ],
  declarations: [
    SettingsComponent
  ],
  exports: [
    SettingsComponent
  ]
})
export class SettingsModule { }
