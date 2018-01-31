import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';

import { LoginComponent } from './login/login.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { ClientMgmtComponent } from './client-mgmt/client-mgmt.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserInfoComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'user', pathMatch: 'full' },
      { path: 'user', component: UserMgmtComponent },
      { path: 'client', component: ClientMgmtComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });

