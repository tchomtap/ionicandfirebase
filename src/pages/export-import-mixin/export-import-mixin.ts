import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import exp, {pi, e} from "../../libs/mathplus"

@IonicPage()
@Component({
  selector: 'page-export-import-mixin',
  templateUrl: 'export-import-mixin.html',
})
export class ExportImportMixinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log("e^{π} = " + exp(pi));
  }

}
