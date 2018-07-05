import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhesProjetoPage } from './detalhes-projeto';

@NgModule({
  declarations: [
    DetalhesProjetoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhesProjetoPage),
  ],
  exports: [
    DetalhesProjetoPage
  ]
})
export class DetalhesProjetoPageModule {}
