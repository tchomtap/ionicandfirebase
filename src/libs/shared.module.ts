import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgifPageModule } from '../pages/ngif/ngif.module';
import { NgSwitchPageModule } from '../pages/ng-switch/ng-switch.module';
import { NgforPageModule } from '../pages/ngfor/ngfor.module';

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        TranslateModule.forChild({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        NgifPageModule,
        NgSwitchPageModule,
        NgforPageModule
    ],
    exports: [
        TranslateModule,
        NgifPageModule,
        NgSwitchPageModule,
        NgforPageModule
    ]
})
export class SharedModule { }