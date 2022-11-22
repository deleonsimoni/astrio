import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';

import { ContatoAdminComponent } from './page/contato/contato.component';
import { ConveniosAdminComponent } from './page/convenios/convenios.component';
import { HomeAdminComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PresidentesAdminComponent } from './page/presidentes/presidentes.component';
import { DiretoriaAdminComponent } from './page/diretoria/diretoria.component';
import { QuemSomosAdminComponent } from './page/quem-somos/quem-somos.component';

@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    ConveniosAdminComponent,
    ContatoAdminComponent,
    PresidentesAdminComponent,
    DiretoriaAdminComponent,
    QuemSomosAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [OnlyAdminUsersGuard],
})
export class AdminModule {}
