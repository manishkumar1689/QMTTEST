import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { PlaygroundComponent } from './pages/playground/playground.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GroupOnBoardingComponent } from './pages/Grouping/group-on-boarding/group-on-boarding/group-on-boarding.component';
import { ProjectOnBoardingComponent } from './pages/Grouping/project-on-boarding/project-on-boarding/project-on-boarding.component';
import { CreateProjectComponent } from './pages/Grouping/project-on-boarding/form/create-project/create-project.component';
import { EditProjectComponent } from './pages/Grouping/project-on-boarding/form/edit-project/edit-project.component';
import { SettingsComponent } from './pages/Grouping/project-on-boarding/form/settings/settings.component';
import { EditGroupComponent } from './pages/Grouping/group-on-boarding/form/edit-group/edit-group.component';
import { CreateGroupComponent } from './pages/Grouping/group-on-boarding/form/create-group/create-group.component';
import { UsermanagementComponent } from './pages/usermanagement/usermanagement.component';
import { UsersComponent } from './pages/usermanagement/users/users.component';
import { GroupsComponent } from './pages/usermanagement/groups/groups.component';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: { title: '' },
    children: [
      { path: '', component: ProjectOnBoardingComponent },

      { path: 'groups', component: GroupOnBoardingComponent }
    ]
  },
  {
    path: 'usermanagement',
    component: UsermanagementComponent,
    children: [{ path: 'user', component: UsersComponent },
      { path: 'group', component: GroupsComponent },
      //{ path: 'edit/group', component: GroupsComponent },
      { path: '**', redirectTo: 'user' },
    ]
   
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: '' },
    children: [{ path: 'projectOnBoarding', component: ProjectOnBoardingComponent },
      { path: 'createProject', component: CreateProjectComponent },
      { path: 'editProject/:projectId', component: EditProjectComponent },
      { path: 'createGroup', component: CreateGroupComponent },
      { path: 'editGroup/:groupId', component: EditGroupComponent },
      { path: 'settingProject/:projectId', component: SettingsComponent },
      { path: 'usermanagement',component: UsermanagementComponent},
      { path: 'groupOnBoarding', component: GroupOnBoardingComponent }]
  },
  {
    path: 'components/playground',
    component: PlaygroundComponent,
    data: {
      title: 'Playground',
      subtitle: 'Angular components'
    }
  },
  {
    path: 'groupOnBoarding',
    component: GroupOnBoardingComponent,
    data: {
      title: 'Group OnBoarding',
      subtitle: 'Angular components'
    }
  },
  {
    path: '**',
    redirectTo: '/',
    data: { title: '404' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
