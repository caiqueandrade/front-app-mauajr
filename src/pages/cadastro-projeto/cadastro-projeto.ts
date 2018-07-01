import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import { HomePage } from '../home/home';
import { Projeto } from '../../models/projeto';
import { isPresent } from 'ionic-angular/umd/util/util';

@IonicPage()
@Component({
  selector: 'page-cadastro-projeto',
  templateUrl: 'cadastro-projeto.html',
})
export class CadastroProjetoPage {

  public nome: string = '';
  public descricao: string = '';
  public data_inicio: string = new Date().toISOString();
  public status: number;

  private _alerta: Alert;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              private _projetosService: ProjetosServiceProvider) {

  }

  cadastrarProjeto(){
    if(!this.nome || !this.descricao || !this.status){
      this._alertCtrl.create({
        title: 'Aviso',
        subTitle: 'Preencha todos os campos.',
        buttons: [
          {text: 'Ok'}
        ]
      }).present();

      return;
    }

    let projeto: Projeto = {
      nome: this.nome,
      descricao: this.descricao,
      data_inicio: this.data_inicio,
      status: this.status
    }

    this._alerta = this._alertCtrl.create({
      title: 'Aviso',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });

    let mensagem = '';

    this._projetosService.cadastrarProjeto(projeto)
        .finally(
          () => {
            this._alerta.setSubTitle(mensagem);
            this._alerta.present();
          }
        )
        .subscribe(
          () => {
            mensagem = 'Projeto cadastrado.';
          },
          () => {
            mensagem = 'Falha ao cadastrar o projeto. Tente novamente.';
          }
        );
  }

}
