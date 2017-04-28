import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//for modal return data
import { ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-modal-child',
  templateUrl: 'navigation-modal-child.html',
})
export class NavigationModalChildPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationModalChildPage');
  }

  public popPage() {
    this.navCtrl.pop();
  }

  public dismissPage() {
    this.viewController.dismiss();
  }

  public dismissWithReturnData() {
    this.viewController.dismiss({data: this.navParams.get('data')+1}); 
  }
}
