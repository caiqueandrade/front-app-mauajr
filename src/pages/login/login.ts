import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UsuariosServiceProvider } from '../../providers/usuarios-service/usuarios-service';
import { Usuario } from '../../models/usuario';

@IonicPage()
@Component({
  	selector: 'page-login',
  	templateUrl: 'login.html',
})
export class LoginPage {

	email: string;
	senha: string;

	  constructor(public navCtrl: NavController,
				  public navParams: NavParams,
				  private _alertCtrl: AlertController,
				  private _usuariosService: UsuariosServiceProvider) {
  	}

  	fazerLogin() {
		console.log(this.email);
		console.log(this.senha);

		this._usuariosService
			.fazerLogin(this.email, this.senha)
			.subscribe(
				(usuario: Usuario) => {
					console.log(usuario);
					this.navCtrl.setRoot(HomePage);
				},
				(err) => {
					this._alertCtrl.create({
						title: 'Falha no Login',
						subTitle: 'Email e/ou senha incorreto. Verifique se as informações estão corretas.',
						buttons: [
							{text: 'Ok'}
						]
					}).present();
				}
			)
		
		
	}

}
