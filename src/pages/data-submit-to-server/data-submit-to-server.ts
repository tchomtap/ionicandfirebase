import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Validator } from '../../libs/util';
import { Http, Headers, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Profile } from '../../libs/model/profile';

@IonicPage()
@Component({
  selector: 'page-data-submit-to-server',
  templateUrl: 'data-submit-to-server.html',
})
export class DataSubmitToServerPage {
  profileForm: FormGroup;
  profile: Profile = new Profile();

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public http: Http) {

    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required]
    });
    this.refreshFormData();
  }

  saveProfile() {
    this.saveToServer().then((profile: Profile) => {
      this.profile = profile;
      this.refreshFormData();
    });
  }

  saveToServer() {
    return new Promise(resolve => {
      let body = new URLSearchParams();
      body.set('name', this.profileForm.get('name').value);
      body.set('address', this.profileForm.get('address').value);
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      this.http.post('http://localhost:8080/ReceiveData', body, headers)
        .map(response => {
          var res = response.json();
          var result = <Profile>response.json();
          return result;
        })
        .subscribe(profile => {
          resolve(profile);
        });
    })
  }

  refreshFormData() {
      this.profileForm.controls["name"].setValue(this.profile.name);
      this.profileForm.controls["address"].setValue(this.profile.address);
  }

}
