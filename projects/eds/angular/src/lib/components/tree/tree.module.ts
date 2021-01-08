import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubTreeComponent, SubTreeTitleDirective } from './sub-tree.component';
import { TreeItemComponent } from './tree-item.component';
import { TreeComponent } from './tree.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    TreeComponent,
    TreeItemComponent,
    SubTreeComponent,
    SubTreeTitleDirective
  ],
  exports: [
    TreeComponent,
    TreeItemComponent,
    SubTreeComponent,
    SubTreeTitleDirective
  ],
})
export class TreeModule { }
