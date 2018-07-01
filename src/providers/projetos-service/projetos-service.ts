import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from '../../models/projeto';

@Injectable()
export class ProjetosServiceProvider {

  private _url = 'http://127.0.0.1:8000/api'

  constructor(private _http: HttpClient) {
  }

  list(){
    return this._http.get<Projeto[]>('http://127.0.0.1:8000/api/projetos')
  }

  cadastrarProjeto(projeto){
    return this._http.post(this._url + '/projetos', projeto);
  }

}
