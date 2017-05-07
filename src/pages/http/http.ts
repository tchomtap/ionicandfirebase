import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@IonicPage()
@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
})
export class HttpPage {
  public items: any;

  constructor(public http: Http) {
    this.http.get('http://localhost:8100/assets/data/datafile.json')
      .map(res => res.json())
      .subscribe(data => {
        this.items = data.items;
      });
  }

  advanceWithCatch() {
    this.http.get('http://localhost:8100/assets/data/datafile.json').catch((error, observable) => {
      console.log(error);
      return observable;
    }).map(res => res.json()).catch((error, observable) => {
      console.log(error);
      return observable;
    }).subscribe(data => {
      this.items = data.items;
    });
  }

}
