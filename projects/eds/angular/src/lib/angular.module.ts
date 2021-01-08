import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { SwitchComponent } from './components/switch/switch.component';
import { TreeComponent } from './components/tree/tree.component';
import { TreeItemComponent } from './components/tree/tree-item.component';
import { SubTreeComponent } from './components/tree/sub-tree.component';
import { IconComponent } from './components/icon/icon.component';
import { SyntaxHighlightComponent } from './components/syntax-highlight/syntax-highlight.component';
import { InputComponent } from './components/input/input.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { GaugeComponent } from './components/gauge/gauge.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { RadioButtonComponent } from './components/radio/radio-button.component';
import { RadioGroupDirective } from './components/radio/radio-group.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab.component';
import { TableComponent } from './components/table/table.component';
import { DatepickerComponent } from './components/date/datepicker.component';
import { SystemBarComponent } from './components/system-bar/system-bar.component';
import { AppBarComponent } from './components/app-bar/app-bar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TileComponent } from './components/tile/tile.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ButtonComponent,
    TooltipComponent,
    AccordionComponent,
    AccordionItemComponent,
    CheckboxComponent,
    ProgressBarComponent,
    SwitchComponent,
    TreeComponent,
    TreeItemComponent,
    SubTreeComponent,
    IconComponent,
    SyntaxHighlightComponent,
    InputComponent,
    DialogComponent,
    GaugeComponent,
    DropdownComponent,
    RadioButtonComponent,
    RadioGroupDirective,
    TabsComponent,
    TabComponent,
    TableComponent,
    DatepickerComponent,
    SystemBarComponent,
    AppBarComponent,
    SettingsComponent,
    TileComponent
  ],
  exports: [
    ButtonComponent,
    TooltipComponent,
    AccordionComponent,
    AccordionItemComponent,
    CheckboxComponent,
    ProgressBarComponent,
    SwitchComponent,
    TreeComponent,
    TreeItemComponent,
    SubTreeComponent,
    IconComponent,
    SyntaxHighlightComponent,
    InputComponent,
    DialogComponent,
    GaugeComponent,
    DropdownComponent,
    RadioButtonComponent,
    RadioGroupDirective,
    TabsComponent,
    TabComponent,
    TableComponent,
    DatepickerComponent,
    SystemBarComponent,
    AppBarComponent,
    SettingsComponent,
    TileComponent
  ]
})
export class EdsAngularModule { }
