import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';

import { ContatoAdminComponent } from './page/contato/contato.component';
import { ConveniosAdminComponent } from './page/convenios/convenios.component';
import { HomeAdminComponent } from './page/home/home.component';
import { PresidentesAdminComponent } from './page/presidentes/presidentes.component';
import { DiretoriaAdminComponent } from './page/diretoria/diretoria.component';


const routes: Routes = [
  {
    path: '',
    // canActivate: [OnlyAdminUsersGuard],
    component: AdminComponent
  },
  {
    path: 'home',
    component: HomeAdminComponent,
  },
  {
    path: 'quem-somos'
  },
  {
    path: 'convenios',
    component: ConveniosAdminComponent
  },
  {
    path: 'contato',
    component: ContatoAdminComponent
  },
  {
    path: 'presidentes',
    component: PresidentesAdminComponent
  },
  {
    path: 'diretoria',
    component: DiretoriaAdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
