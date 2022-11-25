import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/shared/guards';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
