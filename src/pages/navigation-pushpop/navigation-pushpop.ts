import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavigationPushpopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-navigation-pushpop',
  templateUrl: 'navigation-pushpop.html',
})
export class NavigationPushpopPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPushpopPage');
  }

  public pushPage() {
    this.navCtrl.push('NavigationPushpopChildPage');
  }

  public pushPageWithData() {
    this.navCtrl.push('NavigationPushpopChildPage', { data: 987 });
  }
}
