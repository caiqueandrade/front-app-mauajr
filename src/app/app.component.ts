import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ProjetosPage } from '../pages/projetos/projetos';
import { AreasPage } from '../pages/areas/areas';
import { CadastroProjetoPage } from '../pages/cadastro-projeto/cadastro-projeto';
import { CadastroClientePage } from '../pages/cadastro-cliente/cadastro-cliente';
import { CadastroFaturamentoPage } from '../pages/cadastro-faturamento/cadastro-faturamento';

@Component({
  selector: 'myapp',
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'Novo Faturamento', component: CadastroFaturamentoPage.name },
      { title: 'Novo Cliente', component: CadastroClientePage.name },
      { title: 'Novo Projeto', component: CadastroProjetoPage.name },
      { title: 'Áreas de Atuação', component: AreasPage },
      { title: 'Projetos', component: ProjetosPage },
      { title: 'Configurações', component: HomePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  irPagina(p){
    // console.log(p);
    this.nav.push(p.component);
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
}
