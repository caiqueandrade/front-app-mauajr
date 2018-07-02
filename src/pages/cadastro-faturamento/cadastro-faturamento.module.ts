import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroFaturamentoPage } from './cadastro-faturamento';

@NgModule({
  declarations: [
    CadastroFaturamentoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroFaturamentoPage),
  ],
  exports: [
    CadastroFaturamentoPage
  ]
})
export class CadastroFaturamentoPageModule {}
