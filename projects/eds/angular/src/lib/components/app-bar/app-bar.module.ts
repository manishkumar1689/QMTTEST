import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBarComponent } from './app-bar.component';
import { AppBarService } from './app-bar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppBarComponent
  ],
  exports: [
    AppBarComponent
  ],
  providers: [
    AppBarService
  ]
})
export class AppBarModule { }
