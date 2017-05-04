import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { UseProvider } from '../providers/use/use';
import { StructureComponentIonicComponentModule } from '../components/structure-component-ionic/structure-component-ionic.module';
import { StructureProviderIonicProvider } from '../providers/structure-provider-ionic/structure-provider-ionic';
import { StructurePipeIonicPipeModule } from '../pipes/structure-pipe-ionic/structure-pipe-ionic.module';
import { StructureDirectiveIonicDirectiveModule } from '../directives/structure-directive-ionic/structure-directive-ionic.module';
import { UserDefinedComponentModule } from '../components/user-defined/user-defined.module';
import { UserDefinedInputOutputComponentModule } from '../components/user-defined-input-output/user-defined-input-output.module';

@NgModule({
  declarations: [ 
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
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

    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
