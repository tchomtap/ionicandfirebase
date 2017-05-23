import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule, Http } from '@angular/http';

import { MyApp } from './app.component';
import { UseProvider } from '../providers/use/use';
import { StructureComponentIonicComponentModule } from '../components/structure-component-ionic/structure-component-ionic.module';
import { StructureProviderIonicProvider } from '../providers/structure-provider-ionic/structure-provider-ionic';
import { StructurePipeIonicPipeModule } from '../pipes/structure-pipe-ionic/structure-pipe-ionic.module';
import { StructureDirectiveIonicDirectiveModule } from '../directives/structure-directive-ionic/structure-directive-ionic.module';
import { UserDefinedComponentModule } from '../components/user-defined/user-defined.module';
import { UserDefinedInputOutputComponentModule } from '../components/user-defined-input-output/user-defined-input-output.module';
import { IonicStorageModule } from '@ionic/storage';
import { DataServerProvider } from '../providers/data-server/data-server';

import { NgifPage } from '../pages/ngif/ngif';
import { NgSwitchPage } from '../pages/ng-switch/ng-switch';
import { NgforPage } from '../pages/ngfor/ngfor';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { Camera } from "@ionic-native/camera";
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { Firebase } from '@ionic-native/firebase';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    NgifPage,
    NgSwitchPage,
    NgforPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'ionic3andfirebase',
         driverOrder: ['localstorage', 'sqlite', 'indexeddb']
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NgifPage,
    NgSwitchPage,
    NgforPage
  ],
  providers: [
    StatusBar,
    SplashScreen,

    StructureComponentIonicComponentModule,
    UserDefinedComponentModule,
    UserDefinedInputOutputComponentModule,

    StructurePipeIonicPipeModule,

    StructureDirectiveIonicDirectiveModule,

    StructureProviderIonicProvider,
    UseProvider,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServerProvider,

    Camera,
    BarcodeScanner,
    Firebase
  ]
})
export class AppModule {}
