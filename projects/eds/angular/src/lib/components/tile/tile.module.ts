import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TooltipModule } from '../tooltip/tooltip.module';
import { TileActionsDirective, TileComponent, TileSubtitleDirective, TileTitleDirective } from './tile.component';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule,
  ],
  declarations: [
    TileComponent,
    TileTitleDirective,
    TileSubtitleDirective,
    TileActionsDirective,
  ],
  exports: [
    TileComponent,
    TileTitleDirective,
    TileSubtitleDirective,
    TileActionsDirective,
  ],
})
export class TileModule {}
