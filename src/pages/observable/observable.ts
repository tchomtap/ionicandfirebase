import { Component } from '@angular/core';
import { IonicPage, NavController, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-observable',
  templateUrl: 'observable.html',
})
export class ObservablePage {
  public observabled: boolean = false;
  constructor(public navCtrl: NavController, public events: Events) {
    this.observabled = true;
    this.events.subscribe('firstname:lastname', (fn, ln) => {
      console.log('Do something ', fn, ' ', ln);
    });
  }

  ionViewWillUnload() {
    this.events.unsubscribe('firstname:lastname');
  }

  public openPublish() {
    this.navCtrl.push('ObservablePublishPage');
  }
}




