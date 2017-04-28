import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  public navigationPushPop() {
    this.navCtrl.setRoot('NavigationPushpopPage');
  }

  public navigationModal() {
    this.navCtrl.setRoot('NavigationModalPage');
  }

  public navigationPopover() {
    this.navCtrl.setRoot('NavigationPopoverPage');
  }
}
