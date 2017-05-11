import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslationPage } from './translation';
import { Http } from '@angular/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    TranslationPage,
  ],
  imports: [
    IonicPageModule.forChild(TranslationPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  exports: [
    TranslationPage
  ]
})
export class TranslationPageModule {}
