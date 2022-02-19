import { Injectable } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';

@Injectable()
export class ServicemoduleonlyService {

  constructor(private _designUtility : DesignUtilitiesService) { }

  printData(element, value) {
    this._designUtility.printData(element, value)
  }
}
