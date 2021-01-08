import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PlaygroundComponent } from './pages/playground/playground.component';
import { GroupOnBoardingComponent } from './pages/Grouping/group-on-boarding/group-on-boarding/group-on-boarding.component';
import { ProjectOnBoardingComponent } from './pages/Grouping/project-on-boarding/project-on-boarding/project-on-boarding.component';
import { TestGridComponent } from './pages/common/ag-grid/generic.grid';

import {
  AccordionModule,
  AppBarModule,
  ButtonModule,
  CheckboxModule,
  DateModule,
  IconModule,
  ProgressBarModule,
  SettingsModule,
  SwitchModule,
  SyntaxHighlightModule,
  SystemBarModule,
  TooltipModule,
  TreeModule,
  InputModule,
  DialogModule,
  GaugeModule,
  DropdownModule,
  RadioModule,
  TabsModule,
  TableModule,
  TileModule,
  ThemeService
} from '../../projects/eds/angular/src/public_api';
import { AgGridModule } from 'ag-grid-angular';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BtnCellRenderer } from './pages/shared/btn-cell-renderer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateProjectComponent } from './pages/Grouping/project-on-boarding/form/create-project/create-project.component';
import { EditProjectComponent } from './pages/Grouping/project-on-boarding/form/edit-project/edit-project.component';
import { SettingsComponent } from './pages/Grouping/project-on-boarding/form/settings/settings.component';
import { CreateGroupComponent } from './pages/Grouping/group-on-boarding/form/create-group/create-group.component';
import { EditGroupComponent } from './pages/Grouping/group-on-boarding/form/edit-group/edit-group.component';
import { BtnCellCross } from './pages/shared/btn-cell-cross.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BtnCellEdit } from './pages/shared/btn-cell-edit.component';
import { BtnCellSearch } from './pages/shared/btn-cell-search.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { FilterComponent } from './pages/shared/filter/filter.component';
import { CheckListPipe } from './pages/shared/checklist.filter';
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { RouterModule } from '@angular/router';
import { BtnCellEditDelete } from './pages/shared/btn-cell-edit-delete.component';
import { UsersComponent } from './pages/usermanagement/users/users.component';
import { GroupsComponent } from './pages/usermanagement/groups/groups.component';
import { ManagegroupComponent } from './pages/usermanagement/managegroup/managegroup.component';
import { ManageuserComponent } from './pages/usermanagement/manageuser/manageuser.component';
import { DialogTest } from './pages/shared/dialog';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@NgModule({
  declarations: [
    TestGridComponent,
    AppComponent,
    DashboardComponent,
    BtnCellRenderer ,
    PlaygroundComponent,
    GroupOnBoardingComponent,
    ProjectOnBoardingComponent,
    CreateProjectComponent,
    EditProjectComponent,
    SettingsComponent,
    CreateGroupComponent,
    EditGroupComponent,
    BtnCellCross,
    BtnCellEdit,
    BtnCellSearch,
    UsermanagementComponent,
    FilterComponent,
    CheckListPipe,
    BtnCellEditDelete,
    UsersComponent,
    GroupsComponent,
    ManagegroupComponent,
    ManageuserComponent,
    DialogTest
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AccordionModule,
    AppBarModule,
    ButtonModule,
    CheckboxModule,
    DateModule,
    IconModule,
    ProgressBarModule,
    SettingsModule,
    SwitchModule,
    SyntaxHighlightModule,
    SystemBarModule,
    TooltipModule,
    TreeModule,
    InputModule,
    DialogModule,
    GaugeModule,
    DropdownModule,
    RadioModule,
    TabsModule,
    TableModule,
    TileModule,
    HttpClientModule,
    AgGridModule.withComponents([BtnCellRenderer, BtnCellCross, BtnCellEdit, BtnCellSearch, BtnCellEditDelete]),
    NgMultiSelectDropDownModule.forRoot(),
    AngularDualListBoxModule,
    RouterModule
    
  ],
  providers: [ThemeService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
