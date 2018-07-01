import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Area } from '../../models/area';

/*
  Generated class for the AreasServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AreasServiceProvider {

  constructor(private _http: HttpClient) {}

  list(){
    return this._http.get<Area[]>('http://localhost:8000/api/nucleosDepartamentos');
  }

}
