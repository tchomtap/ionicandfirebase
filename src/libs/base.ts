import { TranslateService } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';

export class Base {
    public Base() {
    }

    public static _translateService: TranslateService;
    public static _storage: Storage;

    public translateService: TranslateService = Base._translateService;
    public storage: Storage = Base._storage;

    public static changeLanguage(language: string) {
        Base._translateService.use(language);
        Base._storage.ready().then(() => {
            Base._storage.set('currentLanguage', language);
            window.location.reload();
        });
    }
}