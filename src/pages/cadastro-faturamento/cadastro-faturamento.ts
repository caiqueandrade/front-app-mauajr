import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { FaturamentosServiceProvider } from '../../providers/faturamentos-service/faturamentos-service';
import { Faturamento } from '../../models/faturamento';
import { HomePage } from '../home/home';
import { HttpErrorResponse } from '@angular/common/http';

import 'rxjs/add/operator/finally';

@IonicPage()
@Component({
  selector: 'page-cadastro-faturamento',
  templateUrl: 'cadastro-faturamento.html',
})

export class CadastroFaturamentoPage {

  public valor: number;
  public data_pagamento: string;

  private _alerta: Alert;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              private _faturamentosService: FaturamentosServiceProvider) {  }

  cadastrarFaturamento(){
    let faturamento: Faturamento = {
      valor: this.valor,
      data_pagamento: this.data_pagamento
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

    this._faturamentosService.cadastrarFaturamento(faturamento)
        .finally(
          () => {
            this._alerta.setSubTitle(mensagem);
            this._alerta.present();
          }
        )
        .subscribe(
          () => {
            mensagem = 'Faturamento cadastrado com sucesso'
          },
          (err: HttpErrorResponse) => {   // API cadastra o cliente mas retorna
                                          // um erro de parse, por isso entra aqui
            console.log(err);
            
            mensagem = 'Falha ao cadastrar faturamento. Tente novamente.';
          }
        );
  }

}
