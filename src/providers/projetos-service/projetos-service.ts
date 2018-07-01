import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Projeto } from '../../models/projeto';

@Injectable()
export class ProjetosServiceProvider {

  constructor(private _http: HttpClient) {
  }

  list(){
    return this._http.get<Projeto[]>('http://127.0.0.1:8000/api/projetos')
  }

}
