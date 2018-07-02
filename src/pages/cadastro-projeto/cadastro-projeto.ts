import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert, LoadingController } from 'ionic-angular';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import { HomePage } from '../home/home';
import { Projeto } from '../../models/projeto';

import 'rxjs/add/operator/finally';

import { HttpErrorResponse } from '@angular/common/http';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';
import { Cliente } from '../../models/cliente';
import { ClientesServiceProvider } from '../../providers/clientes-service/clientes-service';
import { Faturamento } from '../../models/faturamento';
import { FaturamentosServiceProvider } from '../../providers/faturamentos-service/faturamentos-service';

@IonicPage()
@Component({
  selector: 'page-cadastro-projeto',
  templateUrl: 'cadastro-projeto.html',
})

export class CadastroProjetoPage implements NavLifecycles {

  public clientes: Cliente[];
  public faturamentos: Faturamento[];

  public nome: string = '';
  public descricao: string = '';
  // public data_inicio: string = new Date().toISOString();
  public data_inicio: string = '20180922';
  public status: number;
  // public cliente_id: number;
  // public faturamento_id: number;
  public clienteSelecionado: Cliente;
  public faturamentoSelecionado: Faturamento;

  private _alerta: Alert;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              private _projetosService: ProjetosServiceProvider,
              private _clientesService: ClientesServiceProvider,
              private _faturamentosService: FaturamentosServiceProvider) {  }

  ionViewDidLoad(){
    // CLIENTES
    let loadingClientes = this._loadingCtrl.create({
      content: 'Carregando os dados...'
    });

    loadingClientes.present();

    this._clientesService.listarClientes()
        .subscribe(
          (clientes) => {
            this.clientes = clientes;
            loadingClientes.dismiss();
          },
          (err: HttpErrorResponse) => {
            console.log(err);

            loadingClientes.dismiss();

            this._alertCtrl.create({
              title: 'Falha na conexão',
              subTitle: 'Não foi possível carregar os dados. Tente novamente mais tarde.',
              buttons: [
                {text: 'Ok'}
              ]
            }).present();
          }
        );

    // FATURAMENTOS
    let loadingFaturamentos = this._loadingCtrl.create({
      content: 'Carregando os dados...'
    });

    loadingFaturamentos.present();

    this._faturamentosService.listarFaturamentos()
        .subscribe(
          (faturamentos) => {
            this.faturamentos = faturamentos;
            loadingFaturamentos.dismiss();
          },
          (err: HttpErrorResponse) => {
            console.log(err);

            loadingFaturamentos.dismiss();

            this._alertCtrl.create({
              title: 'Falha na conexão',
              subTitle: 'Não foi possível carregar os dados. Tente novamente mais tarde.',
              buttons: [
                {text: 'Ok'}
              ]
            }).present();
          }
        );
  }

  cadastrarProjeto(){
    console.log(this.clienteSelecionado.id);
    console.log(this.faturamentoSelecionado.id);

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

    let projeto = {
      nome: this.nome,
      descricao: this.descricao,
      data_inicio: this.data_inicio,
      status: this.status,
      cliente_id: this.clienteSelecionado.id,
      faturamento_id: this.faturamentoSelecionado.id
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
          (err: HttpErrorResponse) => {
            console.log(err);
            
            mensagem = 'Falha ao cadastrar o projeto. Tente novamente.';
          }
        );
  }

}
