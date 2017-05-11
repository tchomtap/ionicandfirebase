import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-translation',
  templateUrl: 'translation.html',
})
export class TranslationPage {
  public subject: string;

  constructor(public translateService: TranslateService, public storage: Storage) {

  }

  ionViewDidLoad() {
    this.translateService.use(this.translateService.currentLang);
    this.translateService.get('Ionic3_and_Firebase').subscribe(value => {
      this.subject = value;
    });
  }

  changeLanguage(language: string) {
    this.translateService.use(language); 
    this.storage.ready().then(() => {
      this.storage.set('currentLanguage', language);
      window.location.reload();
    });
  }

}
