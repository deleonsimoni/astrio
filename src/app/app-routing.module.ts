import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PresidentesComponent } from './presidentes/presidentes.component';
import { DiretoriaComponent } from './diretoria/diretoria.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { OnlyAdminUsersGuard } from './admin/admin-user-guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    /* canActivate: [AuthGuard],*/
  },
  {
    path: 'presidentes',
    component: PresidentesComponent,
    /* canActivate: [AuthGuard],*/
  },
  {
    path: 'diretoria',
    component: DiretoriaComponent,
    /* canActivate: [AuthGuard],*/
  },
  {
    path: 'quem-somos',
    component: QuemSomosComponent,
    /* canActivate: [AuthGuard],*/
  },
  {
    path: 'noticia/:id',
    component: NoticiaComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    canActivate: [OnlyAdminUsersGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
