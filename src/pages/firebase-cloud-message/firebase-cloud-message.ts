import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import firebase from "firebase";
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-firebase-cloud-message',
  templateUrl: 'firebase-cloud-message.html',
})
export class FirebaseCloudMessagePage {
  public message: string;
  public output: string;
  public token: string;
  public name: string;

  constructor(public http: Http) {
  }

  ionViewDidLoad() {
    firebase.auth().signInAnonymously().then((user) => {
      console.log("uid = " + user.uid);
      console.log(user.isAnonymous); // true
    });

    let messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      messaging.getToken().then(currentToken => {
        this.token = currentToken;
        console.log(currentToken)
        this.message = 'Your token is ' + currentToken;
      }).catch(err => {
        this.message = 'An error occurred while retrieving token. ' + err;
      });

      messaging.onTokenRefresh(() => {
        messaging.getToken().then(refreshedToken => {
          this.token = refreshedToken;
          this.message = 'Your refresh token is ' + refreshedToken;
        }).catch(err => {
          this.message = 'Unable to retrieve refreshed token ' + err
        });
      });

      messaging.onMessage(payload => {
        console.log(payload);
        this.message = "Message received. " + payload.data.welcome;
      });

    }).catch(err => {
      this.message = 'Unable to get permission to notify with ' + err;
    });

  }

  callPingPong() {
    firebase.database().ref('messages/' + this.token).set({
      ionic3firebase: this.name
    });
  }

}
