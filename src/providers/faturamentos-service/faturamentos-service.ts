import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Faturamento } from '../../models/faturamento';

@Injectable()
export class FaturamentosServiceProvider {

  private _url = 'http://127.0.0.1:8000/api';

  constructor(private _http: HttpClient) {  }

  listarFaturamentos(){
    return this._http.get<Faturamento[]>(this._url + '/faturamentos');
  }

  cadastrarFaturamento(faturamento){
    return this._http.post(this._url + '/faturamentos', faturamento);
  }
}
