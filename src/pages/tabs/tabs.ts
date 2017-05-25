import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
/*import { NgifPage } from '../ngif/ngif';
import { NgSwitchPage } from '../ng-switch/ng-switch';
import { NgforPage } from '../ngfor/ngfor';*/

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  homeRoot = 'NgifPage';
  myListRoot = 'NgSwitchPage';
  friendsRoot = 'NgforPage';

  constructor() {
  }

}
