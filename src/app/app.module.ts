import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ProjetosPage } from '../pages/projetos/projetos';
import { HttpClientModule } from '@angular/common/http';
import { ProjetosServiceProvider } from '../providers/projetos-service/projetos-service';
import { AreasPage } from '../pages/areas/areas';
import { AreasServiceProvider } from '../providers/areas-service/areas-service';
import { UsuariosServiceProvider } from '../providers/usuarios-service/usuarios-service';

import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/do';
import { ClientesServiceProvider } from '../providers/clientes-service/clientes-service';
import { FaturamentosServiceProvider } from '../providers/faturamentos-service/faturamentos-service';
import { DetalhesProjetoPage } from '../pages/detalhes-projeto/detalhes-projeto';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProjetosPage,
    AreasPage,
    DetalhesProjetoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ProjetosPage,
    AreasPage,
    DetalhesProjetoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjetosServiceProvider,
    AreasServiceProvider,
    UsuariosServiceProvider,
    ClientesServiceProvider,
    FaturamentosServiceProvider
  ]
})
export class AppModule {}
