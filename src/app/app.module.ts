import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/services';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PresidentesComponent } from './presidentes/presidentes.component';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { DiretoriaComponent } from './diretoria/diretoria.component';
import { CustomPipesModule } from './shared/pipes/custom-pipes.module';
import { NoticiaComponent } from './noticia/noticia.component';
import { ToastrModule } from 'ngx-toastr';
import { OnlyAdminUsersGuard } from './admin/admin-user-guard';
import { NgxMaskModule } from 'ngx-mask';


export function appInitializerFactory(authService: AuthService) {
  return () => authService.checkTheUserOnTheFirstLoad();
}

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CarouselModule,
    AppRoutingModule,
    CustomPipesModule,
    ToastrModule.forRoot(),
    NgxMaskModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PresidentesComponent,
    QuemSomosComponent,
    DiretoriaComponent,
    NoticiaComponent
  ],
  providers: [
    OnlyAdminUsersGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchErrorInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [AuthService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
