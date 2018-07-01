import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Projeto } from '../../models/projeto';
import { HttpErrorResponse } from '@angular/common/http';
import { ProjetosServiceProvider } from '../../providers/projetos-service/projetos-service';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})

export class ProjetosPage implements NavLifecycles {

  public projetos: Projeto[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              private _projetosService: ProjetosServiceProvider){}

  ionViewDidLoad() {

    let loading = this._loadingCtrl.create({
      content: 'Carregando os dados...'
    });

    loading.present();
    
    this._projetosService.list()
        .subscribe(
          (projetos) => {
            this.projetos = projetos;
            loading.dismiss();
          }, 
          (err: HttpErrorResponse) => {
            console.log(err);

            loading.dismiss();

            this._alertCtrl.create({
              title: 'Falha na conexão',
              subTitle: 'Não foi possível carregar os dados. Tente novamente!',
              buttons: [
                {text: 'Ok'}
              ]
            }).present()
          }
        );
  }

}
