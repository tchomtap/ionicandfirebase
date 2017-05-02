import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StructureProviderIonicProvider {

  constructor() {

  }

  public getExternalInterface(): string {
    return "External data";
  }

}
