import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Injectable()
export class ClientesServiceProvider {

  private _url = 'http://127.0.0.1:8000/api';

  constructor(private _http: HttpClient) {  }

  listarClientes(){
    return this._http.get<Cliente[]>(this._url + '/clientes');
  }

  cadastrarCliente(cliente){
    return this._http.post(this._url + '/clientes', cliente);
  }

}
