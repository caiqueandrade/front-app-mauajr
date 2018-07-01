import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

@Injectable()
export class UsuariosServiceProvider {

	private _usuarioLogado: Usuario;

	constructor(private _http: HttpClient) {
	}
	  
	fazerLogin(email, senha){
		return this._http.post<Usuario>('http://localhost:8000/api/login', {email, senha})
				  .do((usuario: Usuario) => this._usuarioLogado = usuario);
	}

	obtemUsuarioLogado(){
		return this._usuarioLogado;
	}

}
