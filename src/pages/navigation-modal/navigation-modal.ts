import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-modal',
  templateUrl: 'navigation-modal.html',
})
export class NavigationModalPage {
  public data: number = 123;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalController: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationModalPage');
  }

  public modalPage() {
    let modalPage = this.modalController.create('NavigationModalChildPage', {data: this.data});
    modalPage.present().then(() => {
      modalPage.onDidDismiss(result => {
        console.log('on did dismiss ' + JSON.stringify(result));
        if (result) {
          this.data = result.data;
        }
      });
    });
  }

}
