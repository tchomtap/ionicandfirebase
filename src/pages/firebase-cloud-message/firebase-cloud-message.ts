import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import firebase from "firebase";

@IonicPage()
@Component({
  selector: 'page-firebase-cloud-message',
  templateUrl: 'firebase-cloud-message.html',
})
export class FirebaseCloudMessagePage {
  public message: string;

  constructor() {
    console.log('constructor')
  }

  ionViewDidLoad() {
    let messaging = firebase.messaging();
    messaging.requestPermission().then(() => {
      messaging.getToken().then(currentToken => {
        console.log(currentToken)
        this.message = 'Your token is ' + currentToken;
      }).catch(err => {
        this.message = 'An error occurred while retrieving token. ' + err;
      });

      messaging.onTokenRefresh(function () {
        messaging.getToken().then(refreshedToken => {
          this.message = 'Your refresh token is ' + refreshedToken;
        }).catch(err => {
          this.message = 'Unable to retrieve refreshed token ' + err
        });
      });

      messaging.onMessage(function (payload) {
        this.message = "Message received. " + payload;
      });

    }).catch(err => {
      this.message = 'Unable to get permission to notify with ' + err;
    });

  }

}
