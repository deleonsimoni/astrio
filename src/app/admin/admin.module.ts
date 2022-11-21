import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';

import { ContatoAdminComponent } from './page/contato/contato.component';
import { ConveniosAdminComponent } from './page/convenios/convenios.component';
import { HomeAdminComponent } from './page/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    HomeAdminComponent,
    ConveniosAdminComponent,
    ContatoAdminComponent
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
