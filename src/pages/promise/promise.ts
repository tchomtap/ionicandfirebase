import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-promise',
  templateUrl: 'promise.html',
})
export class PromisePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.callRemote().then((result) => {
      console.log(result);
    });
    console.log('go on');
  }

  callRemote() {
    return new Promise(resolve => {
      console.log('do something');
      resolve('some value');
    })
  }

}
