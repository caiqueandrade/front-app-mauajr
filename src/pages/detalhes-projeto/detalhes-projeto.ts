import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Projeto } from '../../models/projeto';

@IonicPage()
@Component({
  selector: 'page-detalhes-projeto',
  templateUrl: 'detalhes-projeto.html',
})
export class DetalhesProjetoPage {

  public projeto: Projeto;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private toastCtrl: ToastController) {

    this.projeto = this.navParams.get('projetoSelecionado');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhesProjetoPage');
    
  }

  mostrarToast(){
    const toast = this.toastCtrl.create({
      message: 'Caique Andrade | Marcello Beer | Guido Andrade | Vinicius Pinto',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.dismiss();
    toast.present();
  }

}
