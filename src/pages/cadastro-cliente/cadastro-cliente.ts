import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Alert } from 'ionic-angular';
import { ClientesServiceProvider } from '../../providers/clientes-service/clientes-service';
import { Cliente } from '../../models/cliente'
import { HomePage } from '../home/home';
import { HttpErrorResponse } from '@angular/common/http';

@IonicPage()
@Component({
  selector: 'page-cadastro-cliente',
  templateUrl: 'cadastro-cliente.html',
})

export class CadastroClientePage {

  public nome: string = '';
  public cnpj: string = '';

  private _alerta: Alert;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _alertCtrl: AlertController,
              private _clientesService: ClientesServiceProvider) { }

  cadastrarCliente(){
    let cliente: Cliente = {
      nome: this.nome,
      cnpj: this.cnpj
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

    this._clientesService.cadastrarCliente(cliente)
        .finally(
          () => {
            this._alerta.setSubTitle(mensagem);
            this._alerta.present();
          }
        )
        .subscribe(
          () => {
            mensagem = 'Cliente cadastrado com sucesso.';
          },
          (err: HttpErrorResponse) => {   // API cadastra o cliente mas retorna
                                          // um erro de parse, por isso entra aqui
            console.log(err);
            
            mensagem = 'Falha ao cadastrar cliente. Tente novamente.';
          }
        );
  }
}
