import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Area } from '../../models/area';
import { AreasServiceProvider } from '../../providers/areas-service/areas-service';
import { HttpErrorResponse } from '@angular/common/http';
import { NavLifecycles } from '../../utils/ionic/nav/nav-lifecycles';

@IonicPage()
@Component({
  selector: 'page-areas',
  templateUrl: 'areas.html',
})
export class AreasPage implements NavLifecycles {

  public areas: Area[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController,
              private _areasService: AreasServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AreasPage');

    let loading = this._loadingCtrl.create({
      content: 'Carregando os dados...'
    });
    
    loading.present();

    this._areasService.list()
        .subscribe(
          (areas) => {
            this.areas = areas;
            loading.dismiss();
          },
          (err: HttpErrorResponse) => {
            console.log(err);
            
            loading.dismiss();

            this._alertCtrl.create({
              title: 'Falha na Conexão',
              subTitle: 'Não foi possível carregar os dados. Tente novamente!',
              buttons: [
                {text: 'Ok'}
              ]
            }).present();
          }
        );
  }

}
