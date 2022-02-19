import { Injectable } from '@angular/core';
import { DesignUtilitiesService } from 'src/app/_common/services/design-utilities.service';

@Injectable()
export class AppmoduleAndServicemoduleService {

  constructor(private _designUtility : DesignUtilitiesService) {
    //alert('constructor called');
   }

  printData(element, value) {
    this._designUtility.printData(element, value)
  }
}
